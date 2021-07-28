import { useEffect, FC } from 'react'
import { user, room, Room } from 'recoil/atom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { db } from 'config/firebase'
import { useHistory, useParams } from 'react-router-dom'

type ParamsId = {
  id: any
}

export const FireStoreToRecoil: FC = ({ children }) => {
  const userInfo = useRecoilValue(user)
  const [roomInfo, setRoomInfo] = useRecoilState(room)
  const { id } = useParams<ParamsId>()
  const history = useHistory()

  let roomId: string
  if (roomInfo) {
    roomId = id
  } else {
    history.push('/Standby')
  }
  useEffect(() => {
    let unSubscribe: () => void
    const roomRef = db.collection('room').doc(roomId)
    const trumpRef = roomRef.collection('trump')
    if (roomId !== '' && roomId === id) {
      console.log('FireStoreToRecoil!!')
      unSubscribe = roomRef.onSnapshot((doc) => {
        if (!doc) return history.push('/Standby')
        const roomDoc = doc.data() as Room
        setRoomInfo(roomDoc)
      })
    }
    return () => {
      if (roomId) {
        alert('ルームが削除されました')
        history.push('/')
        unSubscribe()
        trumpRef.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            trumpRef.doc(doc.id).delete()
          })
        })
        roomRef.delete()
        setRoomInfo({
          roomId: '',
          inviteCode: '',
          member: {
            [userInfo.id]: {
              name: userInfo.name,
              isHost: false,
              isReady: false,
              hand: '',
              enter: false
            }
          },
          isGaming: false,
          finished: false
        })
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  console.log(roomInfo)
  return <>{children}</>
}
