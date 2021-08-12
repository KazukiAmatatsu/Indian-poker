import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { FireStoreToRecoil } from 'recoil/FireStoreToRecoil'
import { InviteCode, Member, Game } from 'components/display'
import { ContinueButton, GameStartButton } from 'components/button'
import styled from 'styled-components'
import { sp, tab } from 'media'

const Room = () => {
  const roomInfo = useRecoilValue(room)
  const userInfo = useRecoilValue(user)

  return (
    <FireStoreToRecoil>
      {roomInfo.loading ? (
        <Loading>
          {roomInfo.member?.[userInfo.id].enter ? (
            <>
              <p className="frame">
                他のプレイヤーが『もう一度あそぶ』を選択しました。
              </p>
              <ContinueButton />
            </>
          ) : (
            <div className="loading">
              <i className="loading-icon"></i>
            </div>
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
  ${tab`
    font-size: 1.6rem;
  `}
  ${sp`
    font-size: 1.2rem;
  `}
  .loading {
    display: flex;
    height: 80vh;
    justify-content: center;
    align-items: center;
    margin: 0;
    .loading-icon {
      box-sizing: border-box;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      box-shadow: 0 -30px 0 #eee, /*  上  */ 21px -21px 0 #ddd,
        /* 右上 */ 30px 0 0 #ccc, /*  右  */ 21px 21px 0 #bbb,
        /* 右下 */ 0 30px 0 #aaa, /*  下  */ -21px 21px 0 #999,
        /* 左下 */ -30px 0 0 #666, /*  左  */ -21px -21px 0 #000; /* 左上 */
      animation: rotate 1s steps(8) 0s infinite;
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
