import { db } from 'config/firebase'

export const EnterButton = (userId: string, roomId: string) => {
  db.collection('room')
    .doc(roomId)
    .update({
      [`member.${userId}.enter`]: true
    })
}
