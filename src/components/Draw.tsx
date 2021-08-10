import { db } from 'config/firebase'
import { SetTrump } from 'components/SetTrump'

// userIdとroomIdを引数に渡したらカードを一枚引く関数
export const Draw = async (userId: string, roomId: string) => {
  const roomRef = db.collection('room').doc(roomId)
  const trumpRef = roomRef.collection('trump')
  const drawRef = trumpRef.limit(1)

  const deck = await trumpRef.get()
  const deckList = deck.docs.map((doc) => doc.id)

  /* もしカードが残り0枚ならもう一度セットトランプする */
  if (deckList.length === 0) {
    SetTrump(roomId)
    alert('トランプをリセットしました！')
  }

  /* カードを1枚引く */
  drawRef
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        roomRef.update({
          [`member.${userId}.mark`]: doc.data().mark,
          [`member.${userId}.number`]: doc.data().number
        })
        trumpRef.doc(doc.id).delete()
      })
    })
    .catch((e) => {
      console.log(e)
    })
}
