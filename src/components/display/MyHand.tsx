import { user, room } from 'recoil/atom'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

const MyHand = () => {
  const userInfo = useRecoilValue(user)
  const roomInfo = useRecoilValue(room)
  const userId = userInfo.id
  const handRef = roomInfo.member?.[userId]
  if (handRef) {
    let number: number | string = ''
    if (handRef.number === 1) {
      number = 'A'
    } else if (handRef.number === 11) {
      number = 'J'
    } else if (handRef.number === 12) {
      number = 'Q'
    } else if (handRef.number === 13) {
      number = 'K'
    } else {
      number = handRef.number
    }
    return (
      <StyledMyHand red={handRef.mark === '♥' || handRef.mark === '♦'}>
        <div className="cardFrame">
          <div className="head">
            <div className="number">{number}</div>
            <div className="mark">{handRef.mark}</div>
          </div>
          <div className="userName">{handRef.name}</div>
          <div className="foot">
            <div className="mark">{handRef.mark}</div>
            <div className="number">{number}</div>
          </div>
        </div>
      </StyledMyHand>
    )
  } else {
    return null
  }
}
export default MyHand

const StyledMyHand = styled.div<{ red: boolean }>`
  color: ${(props) => (props.red ? '#ff0000' : '')};
  .cardFrame {
    width: 17.4rem; // ヨコ58mm
    height: 26.7rem; // タテ89mm
    border: 0.5px solid ${(props) => props.theme.boderColor};
    border-radius: 0.8rem;
    position: relative;
    font-size: 3rem;
    text-align: center;
    :hover {
      box-shadow: 0 1px 6px #202124;
      border-color: #dfe1e5;
    }
    .head {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
    .foot {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      transform: rotate(180deg);
    }
    .userName {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      color: ${(props) => props.theme.color};
    }
  }
`
