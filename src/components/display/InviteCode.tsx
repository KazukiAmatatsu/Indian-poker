import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Button } from 'components/stylesParts'
import styled from 'styled-components'

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
        <Button>コピー</Button>
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
`
