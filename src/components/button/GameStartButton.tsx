import { useState } from 'react'
import { db } from 'config/firebase'
import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { Draw } from 'components/Draw'
import Button from 'components/stylesParts/Button'

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

  const readyButton = async () => {
    await db
      .collection('room')
      .doc(roomId)
      .update({
        [`member.${userId}.isReady`]: true
      })
    await Draw(userId, roomInfo)
    setReady(true)
  }

  const GameStart = async () => {
    const roomRef = db.collection('room').doc(roomId)
    await Draw(userId, roomInfo)
    await roomRef.update({
      isGaming: true
    })
  }

  return (
    <>
      {!isHost && !roomInfo.isGaming && (
        <Button onClick={() => readyButton()} disabled={ready}>
          {ready ? 'OK!!' : 'Ready?'}
        </Button>
      )}
      {isHost && !roomInfo.isGaming && (
        <Button onClick={() => GameStart()} disabled={!allReady}>
          {allReady ? 'Game Start!!!' : 'ちょっと待ってね'}
        </Button>
      )}
    </>
  )
}

export default GameStartButton
