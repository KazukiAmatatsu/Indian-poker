import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'

const MyHand = () => {
  const userInfo = useRecoilValue(user)
  const roomInfo = useRecoilValue(room)
  const userId = userInfo.id
  return <div>{roomInfo.member?.[userId].hand}</div>
}

export default MyHand
