import { db } from 'config/firebase'

export const Enter = async (userId: string, roomId: string) => {
  await db
    .collection('room')
    .doc(roomId)
    .update({
      [`member.${userId}.enter`]: true
    })
}
