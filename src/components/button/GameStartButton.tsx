import { useState } from 'react'
import { db } from 'config/firebase'
import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { DrawButton } from 'components/button/DrawButton'

const GameStartButton = () => {
  const roomInfo = useRecoilValue(room)
  const userInfo = useRecoilValue(user)
  const userId = userInfo.id
  const roomId = roomInfo.roomId
  const member = roomInfo.member

  const [ready, setReady] = useState(false)

  const isHost = roomInfo.member?.[userInfo.id]?.isHost

  const allReady =
    member &&
    Object.values(member).length ===
      Object.values(member).filter((id) => id?.isReady).length

  const readyButton = () => {
    db.collection('room')
      .doc(roomId)
      .update({
        [`member.${userId}.isReady`]: true
      })
    DrawButton(userId, roomId)
    setReady(true)
  }

  const GameStart = async () => {
    const roomRef = db.collection('room').doc(roomId)
    await DrawButton(userId, roomId)
    await roomRef.update({
      isGaming: true
    })
  }

  return (
    <>
      {!isHost && !roomInfo.isGaming && (
        <button onClick={() => readyButton()} disabled={ready}>
          {ready ? 'OK!!' : 'Ready?'}
        </button>
      )}
      {isHost && !roomInfo.isGaming && (
        <button onClick={() => GameStart()} disabled={!allReady}>
          ゲームスタート
        </button>
      )}
    </>
  )
}

export default GameStartButton
