import { useState } from 'react'
import { user } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import HostButton from 'components/button/HostButton'
import GuestButton from 'components/button/GuestButton'
import Button from 'components/stylesParts/Button'

const Standby = () => {
  const [isOpen, setIsOpen] = useState(false)
  const userInfo = useRecoilValue(user)

  return (
    <>
      <h2>なまえ：{userInfo.name}</h2>
      <HostButton />
      <Button onClick={() => setIsOpen(!isOpen)}>部屋をさがす</Button>
      {isOpen ? <GuestButton /> : <></>}
    </>
  )
}
export default Standby
