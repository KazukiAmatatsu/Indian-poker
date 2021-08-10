import { db } from 'config/firebase'

export const SetTrump = (roomId: string) => {
  const trumpRef = db.collection('room').doc(roomId).collection('trump')

  /* トランプをFireStoreに追加する */
  const mark = ['♠', '♥', '♦', '♣']
  for (let i = 1; i < 14; i++) {
    for (let m = 0; m < 4; m++) {
      trumpRef.add({
        mark: mark[m],
        number: i
      })
    }
  }
  /* console.log('トランプできたよ') */
}
