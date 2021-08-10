import { db } from 'config/firebase'
import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { useHistory } from 'react-router-dom'
import Button from 'components/stylesParts/Button'

const ContinueButton = () => {
  const userInfo = useRecoilValue(user)
  const roomInfo = useRecoilValue(room)
  const roomRef = db.collection('room').doc(roomInfo.roomId)
  const member = roomInfo.member
  const history = useHistory()

  const playAgain = async () => {
    if (
      member &&
      Object.values(member).filter((id) => id?.enter).length ===
        Object.keys(member).length
    ) {
      roomRef.update({
        [`member.${userInfo.id}`]: {
          name: userInfo.name,
          mark: '',
          number: '',
          isHost: true,
          isReady: true,
          enter: false
        }
      })
      alert('このルームのホストになりました！')
    } else {
      roomRef.update({
        [`member.${userInfo.id}`]: {
          name: userInfo.name,
          mark: '',
          number: '',
          isHost: false,
          isReady: false,
          enter: false
        }
      })
    }
    if (
      member &&
      Object.values(member).filter((id) => id?.enter).length === 1 // enterがtrueの人がまだプレイ中の部屋に残っている人
    ) {
      await roomRef.update({
        isGaming: false,
        finished: false,
        loading: false
      })
    } else {
      await roomRef.update({
        loading: true
      })
      alert('他のプレイヤーの参加待ちです。しばらくお待ちください。')
    }
  }

  const leaveRoom = async () => {
    if (
      member &&
      Object.values(member).filter((id) => id?.enter).length === 1
    ) {
      await roomRef.update({
        isGaming: false,
        finished: false,
        loading: false
      })
    }
    history.push('/Standby')
  }

  return (
    <>
      {roomInfo.finished ? (
        <div>
          <Button onClick={() => playAgain()}>もう一度あそぶ</Button>
          <Button onClick={() => leaveRoom()}>部屋を出る</Button>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default ContinueButton
