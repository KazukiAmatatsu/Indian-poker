import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'

const MyHand = () => {
  const roomInfo = useRecoilValue(room)
  const userInfo = useRecoilValue(user)
  const member = roomInfo.member
  const card =
    member && Object.values(member).map((player, index) => player.hand)

  return (
    <>
      {userInfo.name}
      {card}
    </>
  )
}

export default MyHand
