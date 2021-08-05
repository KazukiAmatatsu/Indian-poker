import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

const Member = () => {
  const roomInfo = useRecoilValue(room)
  const userInfo = useRecoilValue(user)
  const member = roomInfo.member
  return (
    <StyledMember className="frame flex center column">
      <h2 className="mb-16">メンバー</h2>
      <ul className="w-90">
        {member &&
          Object.entries(member).map(([index, player]) => {
            return (
              <li key={index} className="flex between mb-8">
                <div className={index === userInfo.id ? 'userName' : ''}>
                  {player.name}
                </div>
                {player.isReady && <div>OK!!</div>}
              </li>
            )
          })}
      </ul>
    </StyledMember>
  )
}
export default Member

const StyledMember = styled.div`
  h2 {
    font-size: 2rem;
  }
  ul {
    li {
      width: 90%;
      flex-direction: row;
      font-size: 2rem;
      font-weight: bold;
      padding: 1rem 3rem;
      border: 0.1rem solid ${(props) => props.theme.boderColor};
      border-radius: 1rem;
      .userName {
        color: ${(props) => props.theme.colors.red};
      }
    }
  }
`
