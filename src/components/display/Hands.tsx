import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

const Hands = () => {
  const roomInfo = useRecoilValue(room)
  const userInfo = useRecoilValue(user)
  const member = roomInfo.member
  return (
    <>
      {member &&
        Object.entries(member).map(([key, data]) => {
          let number: number | string = ''
          if (data.number === 1) {
            number = 'A'
          } else if (data.number === 11) {
            number = 'J'
          } else if (data.number === 12) {
            number = 'Q'
          } else if (data.number === 13) {
            number = 'K'
          } else {
            number = data.number
          }

          if (key !== userInfo.id) {
            return (
              <StyledHands>
                <div className="cardFrame">
                  <div className="head">
                    <div className="number">{number}</div>
                    <div className="mark">{data.mark}</div>
                  </div>
                  <div>{data.mark}</div>
                  <div className="foot">
                    <div className="mark">{data.mark}</div>
                    <div className="number">{number}</div>
                  </div>
                  <p>{data.name}</p>
                </div>
              </StyledHands>
            )
          } else {
            return <></>
          }
        })}
    </>
  )
}

export default Hands

const StyledHands = styled.div`
  width: 5.8rem;
  height: 8.9rem;
  border: 0.1rem solid #000;
`
