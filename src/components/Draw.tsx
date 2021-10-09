import { db } from 'config/firebase'
import { Room } from 'recoil/atom'
import { SetTrump } from 'components/SetTrump'

export const Draw = async (userId: string, roomInfo: Room) => {
  const roomId = roomInfo.roomId
  const roomRef = db.collection('room').doc(roomId)
  const trump = roomInfo.trump
  const newCard = trump[0]

  if (newCard) {
    if (trump.length === 2) {
      const newTrump = SetTrump()
      await roomRef.update({
        trump: newTrump,
        [`member.${userId}.mark`]: newCard.mark,
        [`member.${userId}.number`]: newCard.number
      })
      alert('トランプをリセットされました！')
    } else {
      const remTrump = trump.filter((item, index) => index !== 0)
      await roomRef.update({
        trump: remTrump,
        [`member.${userId}.mark`]: newCard.mark,
        [`member.${userId}.number`]: newCard.number
      })
    }
  }
}
