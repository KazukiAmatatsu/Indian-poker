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

  const enter = roomInfo.member?.[userId].enter
  const draw = () => {
    if (!enter) {
      Draw(userId, roomId)
    } else {
      alert('もう決定しているのでカードを変えることはできません')
    }
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
      {roomInfo.member?.[userId].enter ? (
        <></>
      ) : (
        <div>
          <Button onClick={() => draw()} className="mr-8">
            ドロー
          </Button>
          <Button
            onClick={() => {
              Enter(userId, roomId)
            }}
          >
            決定
          </Button>
        </div>
      )}
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
