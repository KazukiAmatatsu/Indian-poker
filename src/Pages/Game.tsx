import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { DrawButton } from 'components/button/DrawButton'
import Hands from 'components/display/Hands'

const Game = () => {
  const userInfo = useRecoilValue(user)
  const roomInfo = useRecoilValue(room)
  const userId = userInfo.id
  const roomId = roomInfo.roomId
  return (
    <>
      <>Game</>
      <Hands />
      <button onClick={() => DrawButton(userId, roomId)}>どろー</button>
    </>
  )
}

export default Game
