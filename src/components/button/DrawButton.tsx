import { db } from 'config/firebase'

// userIdとroomIdを引数に渡したらカードを一枚引く関数
export const DrawButton = async (userId: string, roomId: string) => {
  const roomRef = db.collection('room').doc(roomId)
  const trumpRef = roomRef.collection('trump')
  const drawRef = trumpRef.where('used', '==', false).limit(1)

  let id = ''
  let mark = ''
  let number = ''

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
