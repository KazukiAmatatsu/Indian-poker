import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'

const Member = () => {
  const roomInfo = useRecoilValue(room)
  const member = roomInfo.member
  return (
    <>
      <h2>メンバー</h2>
      <ul>
        {member &&
          Object.values(member).map((player, index) => (
            <li key={index}>{player.name}</li>
          ))}
      </ul>
    </>
  )
}
export default Member
