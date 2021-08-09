import { useEffect, FC } from 'react'
import { user, room, Room } from 'recoil/atom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { db, firebase } from 'config/firebase'
import { useHistory, useParams } from 'react-router-dom'

export const FireStoreToRecoil: FC = ({ children }) => {
  const userInfo = useRecoilValue(user)
  const [roomInfo, setRoomInfo] = useRecoilState(room)
  const { id } = useParams<{ id: string }>()
  const history = useHistory()

  let roomId: string
  // リロード等でroomIdが消えたらStandbyにhistory
  if (roomInfo.roomId) {
    roomId = roomInfo.roomId
  } else {
    history.push('/Standby')
  }
  useEffect(() => {
    let unSubscribe: () => void
    if (roomId !== '' && roomId === id) {
      const roomRef = db.collection('room').doc(roomId)
      // console.log('FireStoreToRecoil!!')
      unSubscribe = roomRef.onSnapshot((doc) => {
        if (!doc) return history.push('/Standby')
        const roomDoc = doc.data() as Room
        setRoomInfo(roomDoc)
      })
    }
    // Roomコンポーネントから移動したらreturn()の処理が動く
    return () => {
      if (roomId) {
        unSubscribe()
      }
      // リロード等でroomInfoが初期化されてる場合があるのでここはidから取得
      if (id) {
        const roomRef = db.collection('room').doc(id)
        const trumpRef = roomRef.collection('trump')
        // roomInfoからだとなぜかmember{}の中身だけがうまく取得できない
        // ここでFireStoreから再度データを取り直し
        roomRef.get().then((doc) => {
          const member = doc.data()?.member
          const memberId = member && Object.keys(member).length
          if (memberId === 1) {
            alert('プレイヤーがいなくなったため、部屋は削除されました')
            trumpRef.get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                trumpRef.doc(doc.id).delete()
              })
            })
            roomRef.delete()
          } else {
            alert('ルームから退出しました')
            roomRef.update({
              [`member.${userInfo.id}`]: firebase.firestore.FieldValue.delete()
            })
          }
        })
        setRoomInfo({
          roomId: '',
          inviteCode: '',
          member: {},
          isGaming: false,
          finished: false,
          loading: false
        })
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  // console.log(roomInfo)
  return <>{children}</>
}
