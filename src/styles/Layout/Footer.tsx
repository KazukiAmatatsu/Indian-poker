import styled from 'styled-components'
import { useRecoilValue } from 'recoil'
import { room } from 'recoil/atom'

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
`
