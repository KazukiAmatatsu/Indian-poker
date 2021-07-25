import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'

const Hands = () => {
  const roomInfo = useRecoilValue(room)
  const userInfo = useRecoilValue(user)
  const member = roomInfo.member

  return (
    <>
      {member &&
        Object.entries(member).map(([id, data]) => {
          if (id === userInfo.id) {
            return (
              <>
                <div style={{ display: 'none' }}>{data.hand}</div>
                <h3>{data.name}</h3>
              </>
            )
          } else {
            return (
              <>
                <div>{data.hand}</div>
                <h3>{data.name}</h3>
              </>
            )
          }
        })}
    </>
  )
}

export default Hands
