import { db } from 'config/firebase'
import { useHistory } from 'react-router-dom'
import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { DrawButton } from 'components/button/DrawButton'

const GameStartButton = () => {
  const roomInfo = useRecoilValue(room)
  const userInfo = useRecoilValue(user)
  const userId = userInfo.id
  const roomId = roomInfo.roomId
  const history = useHistory()

  const GameStart = async () => {
    const roomRef = db.collection('room').doc(roomId)
    await DrawButton(userId, roomId)
    await roomRef.update({
      isGaming: true
    })
    history.push(`/Game/${roomId}`)
  }
  return <button onClick={() => GameStart()}>ゲームスタート</button>
}

export default GameStartButton
