import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { FireStoreToRecoil } from 'recoil/FireStoreToRecoil'
import InviteCode from 'components/display/InviteCode'
import Member from 'components/display/Member'
import GameStartButton from 'components/button/GameStartButton'
import Game from 'components/display/Game'
import ContinueButton from 'components/button/ContinueButton'

const Room = () => {
  const roomInfo = useRecoilValue(room)

  return (
    <FireStoreToRecoil>
      {roomInfo?.isGaming ? (
        <Game />
      ) : (
        <>
          <InviteCode />
          <Member />
          <GameStartButton />
        </>
      )}
      {roomInfo.finished ? <ContinueButton /> : <></>}
    </FireStoreToRecoil>
  )
}

export default Room
