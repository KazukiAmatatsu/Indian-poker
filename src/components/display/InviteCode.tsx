import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Button from 'components/stylesParts/Button'

const InviteCode = () => {
  const roomInfo = useRecoilValue(room)
  return (
    <div>
      <p>招待コード</p>
      <h2>{roomInfo.inviteCode}</h2>
      <CopyToClipboard
        text={roomInfo.inviteCode}
        onCopy={() => alert(`コピーしました！`)}
      >
        <Button>コピー</Button>
      </CopyToClipboard>
    </div>
  )
}

export default InviteCode
