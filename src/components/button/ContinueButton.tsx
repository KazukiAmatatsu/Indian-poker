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
  const isHost = roomInfo.member?.[userInfo.id]?.isHost
  const hostSearch = member && Object.values(member).filter((id) => id?.isHost)
  const history = useHistory()

  const playAgain = async () => {
    // プレイ中の部屋から出る最後の人はルームを元に戻す処理をする
    if (
      member &&
      Object.values(member).filter((id) => id?.enter).length === 1 // enterがtrueの人がまだプレイ中の部屋に残っている人
    ) {
      await roomRef.update({
        isGaming: false,
        finished: false
      })
    } else {
      alert('他のプレイヤーの参加待ちです。しばらくお待ちください。')
    }
    // ホストがいないときは一番最初のゲストの人がホストになる
    if (isHost || hostSearch?.length === 0) {
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
  }

  const leaveRoom = async () => {
    // プレイ中の部屋から出る最後の人はルームを元に戻す処理をする
    if (
      member &&
      Object.values(member).filter((id) => id?.enter).length === 1
    ) {
      await roomRef.update({
        isGaming: false,
        finished: false
      })
    }
    // StandbyにhistoryすればFireStoreToRecoilのreturnが着火するから部屋から退出できる
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
