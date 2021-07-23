import { useState } from 'react'
import { user } from '../recoil/atom'
import { useRecoilState } from 'recoil'
import Host from '../components/Host'
import Guest from '../components/Guest'

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
      {openRoom ? <Host /> : <></>}
      {inRoom ? <Guest /> : <></>}
    </>
  )
}
export default Standby
