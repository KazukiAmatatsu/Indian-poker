import { db } from '../config/firebase'
import { user, room } from '../recoil/atom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { customAlphabet } from 'nanoid'
import { numbers } from 'nanoid-dictionary'
import { Link } from 'react-router-dom'
import { SetTrump } from './SetTrump'

const HostButton = () => {
  // const [userInfo, setUserInfo] = useRecoilState(user)
  const userInfo = useRecoilValue(user)
  const [roomInfo, setRoomInfo] = useRecoilState(room)
  const code = customAlphabet(numbers, 6)

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
  }

  return (
    <>
      <button onClick={createRoom}>招待コードを発行する</button>
      <h3>招待コード：{roomInfo.inviteCode}</h3>
      {roomInfo.roomId ? (
        <Link to={`/Room/${roomInfo.roomId}`}>ルームに移動</Link>
      ) : (
        <></>
      )}
    </>
  )
}

export default HostButton
