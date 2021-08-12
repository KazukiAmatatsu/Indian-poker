import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { sp, tab } from 'media'

export const Header = () => {
  const history = useHistory()
  return (
    <StyledHeader className="flex center">
      <div className="icon mr-8"></div>
      <div onClick={() => history.push('/')}>Online Indian Poker</div>
      <div className="icon ml-8"></div>
    </StyledHeader>
  )
}

const StyledHeader = styled.div`
  width: 100%;
  height: 7vh;
  line-height: 7vh;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => props.theme.colors.red};
  position: fixed;
  z-index: 99;
  &:hover {
    cursor: pointer;
  }
  .icon {
    background-image: url(${process.env.PUBLIC_URL}/icon.png);
    width: 4vh;
    height: 4vh;
    background-size: cover;
    background-position: center;
  }
  ${tab`
    height: 5vh;
    line-height: 5vh;
    font-size: 2rem;
  `}
  ${sp`
    height: 5vh;
    line-height: 5vh;
    font-size: 1.6rem;
  `}
`
