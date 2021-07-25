import { room } from '../recoil/atom'
import { useRecoilValue } from 'recoil'

export const Member = () => {
  const roomInfo = useRecoilValue(room)
  const member = roomInfo.member
  // const mem = member && Object.values(member)
  // console.log(mem)
  return (
    <>
      {member &&
        Object.values(member).map((player, index) => (
          <li key={index}>{player.name}</li>
        ))}
    </>
  )
}
