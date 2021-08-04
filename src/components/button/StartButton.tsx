import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { user } from 'recoil/atom'
import { useRecoilState } from 'recoil'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { Button, Form, Modal } from 'components/stylesParts'

export const StartButton = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<{ name: string }>()

  const userId = nanoid(6)
  const history = useHistory()

  const [isOpen, setIsOpen] = useState(false)
  const [userInfo, setUserInfo] = useRecoilState(user)

  const setUser = handleSubmit((data: { name: string }) => {
    setUserInfo({ ...userInfo, name: data.name, id: userId })
    history.push('/Standby')
    reset()
    setIsOpen(false)
  })

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Game Start</Button>
      <Modal size="small" isOpen={isOpen} closed={() => setIsOpen(false)}>
        <Form onSubmit={setUser} value={'あなたのお名前は'}>
          <input type="name" {...register('name', { required: true })} />
          {errors.name && <span>プレイヤー名を入力してください</span>}
        </Form>
        <Button onClick={setUser}>決定</Button>
      </Modal>
    </>
  )
}
