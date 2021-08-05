import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { FireStoreToRecoil } from 'recoil/FireStoreToRecoil'
import { InviteCode, Member, Game } from 'components/display'
import GameStartButton from 'components/button/GameStartButton'
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
