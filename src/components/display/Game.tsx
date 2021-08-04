import { db } from 'config/firebase'
import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { Draw } from 'components/Draw'
import { Enter } from 'components/Enter'
import Hands from 'components/display/Hands'
import MyHand from 'components/display/MyHand'
import Result from 'components/display/Result'
import Button from 'components/stylesParts/Button'
// import ContinueButton from 'components/button/ContinueButton'

const Game = () => {
  const userInfo = useRecoilValue(user)
  const roomInfo = useRecoilValue(room)
  const userId = userInfo.id
  const roomId = roomInfo.roomId
  const member = roomInfo.member

  const gameFinish = () => {
    db.collection('room').doc(roomInfo.roomId).update({
      finished: true
    })
  }

  const enterCheck =
    member &&
    Object.values(member).map((player) => {
      return player.enter
    })

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
          <Button onClick={() => Draw(userId, roomId)}>どろー</Button>
          <Button
            onClick={() => {
              Enter(userId, roomId)
            }}
          >
            これで決まり
          </Button>
        </>
      )}
      {enterCheck?.every((val) => {
        return val
      }) ? (
        <>
          {roomInfo.finished ? (
            <>
              <Result />
              {/* <ContinueButton /> */}
            </>
          ) : (
            <Button onClick={() => gameFinish()}>結果発表</Button>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default Game
