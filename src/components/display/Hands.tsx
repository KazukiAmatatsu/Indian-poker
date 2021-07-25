import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'

const Hands = () => {
  const roomInfo = useRecoilValue(room)
  const userInfo = useRecoilValue(user)
  const member = roomInfo.member
  // const userId =
  //   member &&
  //   Object.keys(member).map((id) => {
  //     if (id === userInfo.id) {
  //       return id
  //     } else {
  //       return null
  //     }
  //   })
  // console.log(userId)

  // const card =
  //   member &&
  //   Object.values(member).map((id) => {
  //     if (id.name === userInfo.name) {
  //       return id.hand
  //     } else {
  //       return null
  //     }
  //   })

  return (
    <>
      {userInfo.name}
      {member &&
        Object.entries(member).map(([id, data]) => {
          if (id === userInfo.id) {
            return (
              <>
                <h3>{data.name}</h3>
                <div style={{ display: 'none' }}>{data.hand}</div>
              </>
            )
          } else {
            return (
              <>
                <h3>{data.name}</h3>
                <div>{data.hand}</div>
              </>
            )
          }
        })}
    </>
  )
}

export default Hands
