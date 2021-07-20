import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CreateRoom } from '../components/SetRoom'

type data = {
  name: string
}

const HostStandby = () => {
  const history = useHistory()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<{ name: string }>()

  const createRoom = handleSubmit((data: data) => {
    CreateRoom(data)
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
