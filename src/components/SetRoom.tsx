import { db } from '../config/firebase'
import { nanoid } from 'nanoid'
import { customAlphabet } from 'nanoid'
import { numbers } from 'nanoid-dictionary'

export const CreateRoom = (data: { name: string }) => {
  const userID = nanoid(6)
  const inviteCode = customAlphabet(numbers, 6)

  const roomID = db.collection('room').doc().id
  db.collection('room')
    .doc(roomID)
    .set({
      roomID,
      inviteCode: inviteCode(),
      member: {
        [`${userID}`]: {
          name: data.name,
          hand: '',
          isHost: true,
          isReady: true
        }
      },
      isGaming: false
    })
}

export const JoinRoom = async (data: { name: string; code: string }) => {
  const userID = nanoid(6)
  const getRoomID = async (code: string) => {
    let roomID: string = ''
    await db
      .collection('room')
      .where('inviteCode', '==', code)
      .where('isGaming', '==', false)
      .limit(1)
      .get()
      .then((docs) =>
        docs.forEach((doc) => {
          roomID = doc.id
        })
      )
      .catch((error) => {
        console.log(error)
      })
    return roomID
  }

  const inviteCode = data.code
  if (inviteCode.length === 6) {
    const roomID = await getRoomID(inviteCode)
    if (roomID) {
      db.collection('room')
        .doc(roomID)
        .update({
          [`member.${userID}`]: {
            name: data.name,
            hand: '',
            isHost: false,
            isReady: false
          }
        })
    } else {
      alert('その部屋は存在しないかプレイ中です。')
    }
  } else {
    alert('6桁の招待コードを入力してください')
  }
}
