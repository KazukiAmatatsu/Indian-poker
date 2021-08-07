import { room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

const Result = () => {
  const roomInfo = useRecoilValue(room)
  const member = roomInfo.member

  let markStrength = ['♠', '♥', '♦', '♣']

  const sorted =
    member &&
    Object.values(member).sort((a, b) => {
      if (a.number !== b.number) {
        return b.number - a.number
      }
      if (a.number === b.number && a.mark !== b.mark) {
        return markStrength.indexOf(a.mark) - markStrength.indexOf(b.mark)
      }
      return 0
    })

  return (
    <StyledResult className="frame">
      <ul>
        {sorted?.map((p, key) => {
          return (
            <li key={key}>
              <div className="rank">
                {key + 1}
                <span className="unit">位</span>
              </div>
              <div className="user">{p.name}</div>
            </li>
          )
        })}
      </ul>
    </StyledResult>
  )
}

export default Result

const StyledResult = styled.div`
  width: 50%;
  font-size: 3rem;
  li {
    display: table;
    width: 100%;
    margin-bottom: 0.8rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .rank {
    display: table-cell;
    text-align: center;
    width: 30%;
  }
  .unit {
    font-size: 2rem;
  }
  .user {
    display: table-cell;
    text-align: center;
    width: 70%;
    font-weight: bold;
  }
`
