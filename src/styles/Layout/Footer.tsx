import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { room } from 'recoil/atom'
import { sp, tab } from 'media'

export const Footer = () => {
  const roomInfo = useRecoilValue(room)
  return (
    <StyledFooter className="flex center">
      {roomInfo.finished ? (
        <div>Thank you for playing!!</div>
      ) : (
        <div>
          <span>©</span>2021 kaz
        </div>
      )}
    </StyledFooter>
  )
}

const StyledFooter = styled.div`
  width: 100%;
  height: 7vh;
  line-height: 7vh;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => props.theme.colors.black};
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 99;
  span {
    font-size: 2.4rem;
    margin-right: 4px;
  }
  ${tab`
    height: 5vh;
    line-height: 5vh;
    font-size: 1.6rem;
    span {
      font-size: 2rem;
      margin-right: 4px;
    }
  `}
  ${sp`
    height: 5vh;
    line-height: 5vh;
    font-size: 1.2rem;
    span {
      font-size: 1.6rem;
      margin-right: 4px;
    }
  `}
`
