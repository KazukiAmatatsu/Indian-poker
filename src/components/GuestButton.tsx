import { db } from '../config/firebase'
import { user, room } from '../recoil/atom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { GetRoomID } from './GetRoomID'

const Guest = () => {
  const userInfo = useRecoilValue(user)
  const [roomInfo, setRoomInfo] = useRecoilState(room)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<{ code: string }>()
  const history = useHistory()

  const joinRoom = handleSubmit(async (data: { code: string }) => {
    const inviteCode = data.code
    if (inviteCode.length === 6) {
      const roomId = await GetRoomID(inviteCode)
      if (roomId) {
        db.collection('room')
          .doc(roomId)
          .update({
            [`member.${userInfo.id}`]: {
              name: userInfo.name,
              hand: '',
              isHost: false,
              isReady: false
            }
          })
        setRoomInfo({
          ...roomInfo,
          roomId: roomId,
          inviteCode: inviteCode
        })
        history.push(`/Room/${roomId}`)
      } else {
        alert('その部屋は存在しないかプレイ中です。')
      }
    } else {
      alert('6桁の招待コードを入力してください')
    }
    reset()
  })

  return (
    <>
      <form onSubmit={joinRoom}>
        <input
          type="code"
          placeholder="招待コード"
          {...register('code', { required: true })}
        />
        {errors.code && (
          <span style={{ color: 'red' }}>招待コードを入力してください</span>
        )}
      </form>
      <button onClick={joinRoom}>部屋に入る</button>
    </>
  )
}

export default Guest
