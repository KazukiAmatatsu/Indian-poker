import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { FireStoreToRecoil } from 'recoil/FireStoreToRecoil'
import InviteCode from 'components/display/InviteCode'
import Member from 'components/display/Member'
import GameStartButton from 'components/button/GameStartButton'
import Game from 'components/display/Game'
import ContinueButton from 'components/button/ContinueButton'
import styled from 'styled-components'

const Room = () => {
  const roomInfo = useRecoilValue(room)

  return (
    <FireStoreToRecoil>
      <StyledRoom className="w-90">
        {roomInfo?.isGaming ? (
          <>
            <Game />
            <ContinueButton />
          </>
        ) : (
          <>
            <InviteCode />
            <Member />
            <GameStartButton />
          </>
        )}
      </StyledRoom>
    </FireStoreToRecoil>
  )
}

export default Room

const StyledRoom = styled.div``
