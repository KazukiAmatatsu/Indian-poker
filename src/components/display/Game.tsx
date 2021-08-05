import { db } from 'config/firebase'
import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { Draw } from 'components/Draw'
import { Enter } from 'components/Enter'
import { Hands, MyHand, Result } from 'components/display'
import { Button } from 'components/stylesParts'

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
