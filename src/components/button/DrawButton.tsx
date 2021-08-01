import { db } from 'config/firebase'

// userIdとroomIdを引数に渡したらカードを一枚引く関数
export const DrawButton = async (userId: string, roomId: string) => {
  const roomRef = db.collection('room').doc(roomId)
  const trumpRef = roomRef.collection('trump')
  const drawRef = trumpRef.where('used', '==', false).limit(1)

  let id = ''
  let mark = ''
  let number = ''

  // もし全部のカードが使用済みだったらシャッフルして未使用にする
  trumpRef.where('used', '==', true).onSnapshot((querySnapshot) => {
    const usedCards = querySnapshot.docs.map((doc) => doc.id)
    if (usedCards.length === 52) {
      trumpRef.get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          trumpRef.doc(doc.id).update({
            used: false
          })
        })
      })
      console.log('デッキを戻したよ')
    }
  })

  // カードを1枚引く
  await drawRef
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        return (
          (id = doc.id), (mark = doc.data().mark), (number = doc.data().number)
        ) /*eslint no-sequences: "error"*/
      })
    })
    .catch((e) => {
      console.log(e)
    })

  // 引いたカードを使用済みにする
  await trumpRef
    .doc(id)
    .update({
      used: true
    })
    .then(() => {
      console.log('カード使ったよ')
    })
    .catch((e) => {
      console.error(e)
    })

  // 引いたカードを手札にする
  roomRef.update({
    [`member.${userId}.mark`]: mark,
    [`member.${userId}.number`]: number
  })
}
