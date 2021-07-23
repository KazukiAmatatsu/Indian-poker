import { useState } from 'react'
import { db } from '../config/firebase'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'

const Guest = () => {
  const [roomID, setRoomID] = useState<String>()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<{ name: string; code: string }>()

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

  const joinRoom = handleSubmit(
    async (data: { name: string; code: string }) => {
      const inviteCode = data.code
      const roomID = await getRoomID(inviteCode)
      if (inviteCode.length === 6) {
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
      reset()
      setRoomID(roomID)
    }
  )

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
      <button onClick={joinRoom}>ルームを探す</button>
      {roomID ? <Link to={`/Room/${roomID}`}>ルームに移動</Link> : <></>}
    </>
  )
}

export default Guest
