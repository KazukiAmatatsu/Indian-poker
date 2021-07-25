import { useState } from 'react'
import { user } from '../recoil/atom'
import { useRecoilValue } from 'recoil'
import HostButton from '../components/HostButton'
import GuestButton from '../components/GuestButton'

const Standby = () => {
  const [isOpen, setIsOpen] = useState(false)
  const userInfo = useRecoilValue(user)

  return (
    <>
      <h2>なまえ：{userInfo.name}</h2>
      <HostButton />
      <button onClick={() => setIsOpen(!isOpen)}>部屋をさがす</button>
      {isOpen ? <GuestButton /> : <></>}
    </>
  )
}
export default Standby
