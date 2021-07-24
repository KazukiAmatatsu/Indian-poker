import { db } from '../config/firebase'

export const GetRoomID = async (code: string) => {
  if (code.length === 6) {
    let room: string = ''
    await db
      .collection('room')
      .where('inviteCode', '==', code)
      .where('isGaming', '==', false)
      .limit(1)
      .get()
      .then((docs) =>
        docs.forEach((doc) => {
          room = doc.id
        })
      )
      .catch((error) => {
        console.log(error)
      })
    return room
  }
}
