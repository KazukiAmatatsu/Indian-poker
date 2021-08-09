import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

export const Header = () => {
  const history = useHistory()
  return (
    <StyledHeader className="flex center">
      <div onClick={() => history.push('/')}>インディアン・ポーカー</div>
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
`
