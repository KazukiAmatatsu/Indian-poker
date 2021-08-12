import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Button } from 'components/stylesParts'
import styled from 'styled-components'
import { sp } from 'media'

const InviteCode = () => {
  const roomInfo = useRecoilValue(room)
  return (
    <StyledInviteCode className="frame flex between">
      <h2>招待コード</h2>
      <p>{roomInfo.inviteCode}</p>
      <CopyToClipboard
        text={roomInfo.inviteCode}
        onCopy={() => alert(`コピーしました！`)}
      >
        <Button className="copyButton">コピー</Button>
      </CopyToClipboard>
    </StyledInviteCode>
  )
}

export default InviteCode

const StyledInviteCode = styled.div`
  h2 {
    font-size: 2rem;
  }
  p {
    font-size: 3rem;
    font-weight: bold;
  }
  .copyButton {
    color: #fff;
    font-weight: bold;
    background-color: ${(props) => props.theme.colors.black};
    border-radius: 3rem;
  }
  ${sp`
    h2 {
      font-size: 1.6rem;
    }
    p {
      font-size: 2rem;
      font-weight: bold;
    }
    .copyButton {
      font-size: 1rem;
      padding: 0 1.2rem;
      min-width: 5rem;
    }
  `}
`
