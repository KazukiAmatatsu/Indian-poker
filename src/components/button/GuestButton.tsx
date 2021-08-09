import { db } from 'config/firebase'
import { user, room } from 'recoil/atom'
import { useRecoilValue, useRecoilState } from 'recoil'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { GetRoomID } from 'components/GetRoomID'
import { Button, Form } from 'components/stylesParts'

const GuestButton = () => {
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
              mark: '',
              number: '',
              isHost: false,
              isReady: false,
              enter: false
            }
          })
        setRoomInfo({
          ...roomInfo,
          roomId: roomId,
          inviteCode: inviteCode,
          loading: false
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
      <Form onSubmit={joinRoom} value={'招待コード'}>
        <input type="code" {...register('code', { required: true })} />
        {errors.code && (
          <span style={{ color: 'red' }}>招待コードを入力してください</span>
        )}
      </Form>
      <Button onClick={joinRoom}>部屋に入る</Button>
    </>
  )
}

export default GuestButton
