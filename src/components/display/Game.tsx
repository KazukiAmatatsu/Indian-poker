import { db } from 'config/firebase'
import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { Hands, MyHand, Result } from 'components/display'
import { Button } from 'components/stylesParts'

const Game = () => {
  const roomInfo = useRecoilValue(room)
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
      <Hands />
      <MyHand />
      {enterCheck?.every((val) => {
        return val
      }) ? (
        <>
          {roomInfo.finished ? (
            <div className="w-50">
              <Result />
            </div>
          ) : (
            <div>
              <Button onClick={() => gameFinish()}>結果発表</Button>
            </div>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  )
}

export default Game
