import { db } from 'config/firebase'
import { Room } from 'recoil/atom'
import { SetTrump } from 'components/SetTrump'

export const StrongCardDraw = async (userId: string, roomInfo: Room) => {
  const roomId = roomInfo.roomId
  const roomRef = db.collection('room').doc(roomId)
  const trump = roomInfo.trump
  const newCard = trump.find((item) => item.number > 11)
  alert('こっそり強いカードを引いたよ')
  console.log(newCard)

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
      const remTrump = trump.filter((item) => item !== newCard)
      await roomRef.update({
        trump: remTrump,
        [`member.${userId}.mark`]: newCard.mark,
        [`member.${userId}.number`]: newCard.number
      })
    }
  }
}
