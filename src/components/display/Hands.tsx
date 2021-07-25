import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'

const Hands = () => {
  const roomInfo = useRecoilValue(room)
  const userInfo = useRecoilValue(user)
  const member = roomInfo.member

  return (
    <>
      {member &&
        Object.entries(member).map(([key, data]) => {
          if (key !== userInfo.id) {
            return (
              <>
                <div>{data.hand}</div>
                <p>{data.name}</p>
              </>
            )
          }
        })}
    </>
  )
}

export default Hands
