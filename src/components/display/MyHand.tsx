import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'

const MyHand = () => {
  const userInfo = useRecoilValue(user)
  const roomInfo = useRecoilValue(room)
  const userId = userInfo.id
  const handRef = roomInfo.member?.[userId]
  if (handRef) {
    return <div>{handRef.mark + handRef?.number}</div>
  } else {
    return null
  }
}
export default MyHand
