import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { DrawButton } from 'components/button/DrawButton'
import { EnterButton } from 'components/button/EnterButton'
import Hands from 'components/display/Hands'
import MyHand from 'components/display/MyHand'

const Game = () => {
  const userInfo = useRecoilValue(user)
  const roomInfo = useRecoilValue(room)
  const userId = userInfo.id
  const roomId = roomInfo.roomId
  return (
    <>
      <>Game</>
      <h2>相手の手札</h2>
      <Hands />
      <hr />
      <h2>自分の手札</h2>
      <MyHand />
      {roomInfo.member?.[userId].enter ? (
        <></>
      ) : (
        <>
          <button onClick={() => DrawButton(userId, roomId)}>どろー</button>
          <button
            onClick={() => {
              EnterButton(userId, roomId)
            }}
          >
            これで決まり
          </button>
        </>
      )}
    </>
  )
}

export default Game
