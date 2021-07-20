import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { JoinRoom } from '../components/SetRoom'

const GuestStandby = () => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<{ name: string; code: string }>()

  const joinRoom = handleSubmit((data) => {
    JoinRoom(data)
    history.push('/Room')
    reset()
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
