import { db } from '../config/firebase'
import { user, room } from '../recoil/atom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { customAlphabet } from 'nanoid'
import { numbers } from 'nanoid-dictionary'
import { useHistory } from 'react-router-dom'
import { SetTrump } from './SetTrump'

const HostButton = () => {
  const userInfo = useRecoilValue(user)
  const [roomInfo, setRoomInfo] = useRecoilState(room)
  const code = customAlphabet(numbers, 6)
  const history = useHistory()

  const createRoom = async () => {
    const roomId = db.collection('room').doc().id
    const inviteCode = code()
    await db
      .collection('room')
      .doc(roomId)
      .set({
        roomId,
        inviteCode: inviteCode,
        member: {
          [userInfo.id]: {
            name: userInfo.name,
            hand: '',
            isHost: true,
            isReady: true
          }
        },
        isGaming: false
      })
    SetTrump(roomId)
    setRoomInfo({
      ...roomInfo,
      roomId: roomId,
      inviteCode: inviteCode
    })
    history.push(`/Room/${roomId}`)
  }

  return (
    <>
      <button onClick={createRoom}>部屋をつくる</button>
    </>
  )
}

export default HostButton
