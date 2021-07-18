import { db } from '../config/firebase'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

const GuestStandby = () => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<{ name: string; code: string }>()

  const userID = () => {
    let result = ''
    var c = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < 6; i++) {
      result += c[Math.floor(Math.random() * c.length)]
    }
    return result
  }

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

  const joinRoom = handleSubmit(async (data) => {
    const inviteCode = data.code
    if (inviteCode.length === 6) {
      const roomID = await getRoomID(inviteCode)
      if (roomID) {
        db.collection('room')
          .doc(roomID)
          .update({
            [`member.${userID()}`]: {
              name: data.name,
              hand: '',
              isHost: false,
              isReady: false
            }
          })
        history.push('/Room')
      } else {
        alert('その部屋は存在しないかプレイ中です。')
      }
      reset()
    } else {
      alert('6桁の招待コードを入力してください')
    }
  })

  return (
    <>
      <form onSubmit={joinRoom}>
        <input
          type="name"
          placeholder="プレイヤー名"
          {...register('name', { required: true })}
        />
        {errors.name && (
          <span style={{ color: 'red' }}>プレイヤー名を入力してください</span>
        )}
        <input
          type="code"
          placeholder="招待コード"
          {...register('code', { required: true })}
        />
        {errors.code && (
          <span style={{ color: 'red' }}>招待コードを入力してください</span>
        )}
      </form>
      <button onClick={joinRoom}>ルームに参加する</button>
    </>
  )
}

export default GuestStandby
