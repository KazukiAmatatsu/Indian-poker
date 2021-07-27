import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { FireStoreToRecoil } from 'recoil/FireStoreToRecoil'
import { Member } from 'components/display/Member'
import GameStartButton from 'components/button/GameStartButton'
import Game from 'components/display/Game'

const Room = () => {
  const roomInfo = useRecoilValue(room)

  return (
    <FireStoreToRecoil>
      {roomInfo?.isGaming ? (
        <Game />
      ) : (
        <>
          <h2>id：{roomInfo.inviteCode}</h2>
          <Member />
          <GameStartButton />
        </>
      )}
    </FireStoreToRecoil>
  )
}

export default Room
