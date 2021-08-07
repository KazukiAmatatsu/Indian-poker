import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { FireStoreToRecoil } from 'recoil/FireStoreToRecoil'
import { InviteCode, Member, Game } from 'components/display'
import { ContinueButton, GameStartButton } from 'components/button'

import styled from 'styled-components'

const Room = () => {
  const roomInfo = useRecoilValue(room)

  return (
    <FireStoreToRecoil>
      <StyledRoom>
        <div className="w-90 center">
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
        </div>
      </StyledRoom>
    </FireStoreToRecoil>
  )
}

export default Room

const StyledRoom = styled.div``
