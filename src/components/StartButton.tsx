import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { user } from '../recoil/atom'
import { useRecoilState } from 'recoil'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'

export const StartButton = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<{ name: string }>()

  const userID = nanoid(6)
  const history = useHistory()

  const [isOpen, setIsOpen] = useState(true)
  const [userInfo, setUserInfo] = useRecoilState(user)

  const setUser = handleSubmit((data: { name: string }) => {
    setUserInfo({ ...userInfo, name: data.name, id: userID })
    history.push('/Standby')
    reset()
    setIsOpen(false)
  })

  return (
    <>
      {isOpen ? (
        <button onClick={() => setIsOpen(!isOpen)}>Game Start</button>
      ) : (
        <>
          <form onSubmit={setUser}>
            <input
              type="name"
              placeholder="プレイヤー名"
              {...register('name', { required: true })}
            />
            {errors.name && (
              <span style={{ color: 'red' }}>
                プレイヤー名を入力してください
              </span>
            )}
          </form>
          <button onClick={setUser}>名前を決定する</button>
        </>
      )}
    </>
  )
}
