import { useState } from 'react'
import { user } from '../recoil/atom'
import { useRecoilState } from 'recoil'
import HostButton from '../components/HostButton'
import GuestButton from '../components/GuestButton'

const Standby = () => {
  const [openRoom, setOpenRoom] = useState(false)
  const [inRoom, setInRoom] = useState(false)
  const [userInfo, setUserInfo] = useRecoilState(user)

  const host = () => {
    setOpenRoom(!openRoom)
    setInRoom(false)
  }
  const guest = () => {
    setInRoom(!inRoom)
    setOpenRoom(false)
  }

  return (
    <>
      <h2>なまえ：{userInfo.name}</h2>
      <button onClick={() => host()}>部屋をつくる</button>
      <button onClick={() => guest()}>部屋に入る</button>
      {openRoom ? <HostButton /> : <></>}
      {inRoom ? <GuestButton /> : <></>}
    </>
  )
}
export default Standby
