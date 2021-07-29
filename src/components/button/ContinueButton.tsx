import { db, firebase } from 'config/firebase'
import { user, room } from 'recoil/atom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { useHistory } from 'react-router-dom'

const ContinueButton = () => {
  const userInfo = useRecoilValue(user)
  const [roomInfo, setRoomInfo] = useRecoilState(room)
  const roomId = roomInfo.roomId
  const roomRef = db.collection('room').doc(roomId)
  const history = useHistory()

  const playAgain = () => {
    roomRef.update({
      isGaming: false,
      finished: false
    })
    history.push(`/room/${roomId}`)
  }

  const leaveRoom = async () => {
    await roomRef.update({
      [`member.${userInfo.id}`]: firebase.firestore.FieldValue.delete()
    })
    alert('部屋から出たよ')
    history.push('/Standby')
  }

  return (
    <>
      {roomInfo.finished ? (
        <button onClick={() => playAgain()}>もう一度あそぶ</button>
      ) : (
        <></>
      )}
      <button onClick={() => leaveRoom()}>部屋を出る</button>
    </>
  )
}

export default ContinueButton
