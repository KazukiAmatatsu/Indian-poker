import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { FireStoreToRecoil } from 'recoil/FireStoreToRecoil'
import { InviteCode, Member, Game } from 'components/display'
import { ContinueButton, GameStartButton } from 'components/button'
import styled from 'styled-components'

const Room = () => {
  const roomInfo = useRecoilValue(room)
  const userInfo = useRecoilValue(user)

  return (
    <FireStoreToRecoil>
      {roomInfo.loading ? (
        <Loading>
          {roomInfo.member?.[userInfo.id].enter ? (
            <>
              <div className="frame">
                他のプレイヤーがもう一度遊ぶを選択しました。
              </div>
              <ContinueButton />
            </>
          ) : (
            <div className="frame">Now Loading...</div>
          )}
        </Loading>
      ) : (
        <>
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
        </>
      )}
    </FireStoreToRecoil>
  )
}

export default Room

const Loading = styled.div`
  font-size: 2rem;
`
