import { useState } from 'react'
import { user } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import HostButton from 'components/button/HostButton'
import GuestButton from 'components/button/GuestButton'
import { Button, Modal } from 'components/stylesParts'
import styled from 'styled-components'

const Standby = () => {
  const [isOpen, setIsOpen] = useState(false)
  const userInfo = useRecoilValue(user)

  return (
    <StyledStandby className="w-90">
      <div className="frame flex center">
        <h2>
          Player：<span>{userInfo.name}</span>
        </h2>
      </div>
      <HostButton />
      <Button className="fill" onClick={() => setIsOpen(true)}>
        部屋をさがす
      </Button>
      <Modal size="small" isOpen={isOpen} closed={() => setIsOpen(false)}>
        <GuestButton />
      </Modal>
    </StyledStandby>
  )
}
export default Standby

const StyledStandby = styled.div`
  h2 {
    font-size: 2rem;
    span {
      font-weight: bold;
      color: ${(props) => props.theme.colors.red};
    }
  }
`
