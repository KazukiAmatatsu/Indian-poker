import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { DrawButton } from 'components/button/DrawButton'
import MyHand from 'components/display/MyHand'

const Game = () => {
  const userInfo = useRecoilValue(user)
  const roomInfo = useRecoilValue(room)
  const userId = userInfo.id
  const roomId = roomInfo.roomId
  return (
    <>
      <>Game</>
      <h2>まいかーど</h2>
      <MyHand />
      <h2>相手のかーど</h2>
      <button onClick={() => DrawButton(userId, roomId)}>どろー</button>
    </>
  )
}

export default Game
