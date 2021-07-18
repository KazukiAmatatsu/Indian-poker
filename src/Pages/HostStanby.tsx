import { db } from '../config/firebase'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

const HostStandby = () => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<{ name: string }>()

  const randomID = () => {
    let result = ''
    for (var i = 0; i < 6; i++) {
      result += Math.floor(Math.random() * 10)
    }
    return result
  }

  const userID = () => {
    let result = ''
    var c = 'abcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < 6; i++) {
      result += c[Math.floor(Math.random() * c.length)]
    }
    return result
  }

  const createRoom = handleSubmit((data) => {
    const roomID = db.collection('room').doc().id
    db.collection('room')
      .doc(roomID)
      .set({
        roomID,
        inviteCode: randomID(),
        member: {
          [`${userID()}`]: {
            name: data.name,
            hand: '',
            isHost: true,
            isReady: true
          }
        },
        isGaming: false
      })
    history.push('/Room')
    reset()
  })

  return (
    <>
      <form onSubmit={createRoom}>
        <input
          type="name"
          placeholder="プレイヤー名"
          {...register('name', { required: true })}
        />
        {errors.name && (
          <span style={{ color: 'red' }}>プレイヤー名を入力してください</span>
        )}
      </form>
      <button onClick={createRoom}>ルームを作成する</button>
    </>
  )
}

export default HostStandby
