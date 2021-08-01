import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import { CopyToClipboard } from 'react-copy-to-clipboard'

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
        <button>コピー</button>
      </CopyToClipboard>
    </div>
  )
}

export default InviteCode
