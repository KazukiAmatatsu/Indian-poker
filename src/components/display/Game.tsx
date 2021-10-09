import { useState } from 'react'
import { db } from 'config/firebase'
import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { Hands, MyHand, Result } from 'components/display'
import { Button } from 'components/stylesParts'
import { StrongCardDraw } from 'components/StrongCardDraw'

const Game = () => {
  const userInfo = useRecoilValue(user)
  const userId = userInfo.id
  const roomInfo = useRecoilValue(room)
  const member = roomInfo.member
  const [count, setCount] = useState<number>(0)
  const enter = roomInfo.member?.[userId].enter

  const gameFinish = async () => {
    await db.collection('room').doc(roomInfo.roomId).update({
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
            <div className="mt-16 w-50">
              <Result />
            </div>
          ) : (
            <div className="mt-8">
              <Button onClick={() => gameFinish()}>結果発表</Button>
            </div>
          )}
        </>
      ) : (
        <></>
      )}
      {!enter && count === 5 ? (
        <button
          onClick={() => {
            StrongCardDraw(userId, roomInfo)
            setCount(0)
          }}
        >
          強いカードを引く
        </button>
      ) : (
        <button style={{ opacity: 0.02 }} onClick={() => setCount(count + 1)}>
          隠しボタン
        </button>
      )}
    </>
  )
}

export default Game
