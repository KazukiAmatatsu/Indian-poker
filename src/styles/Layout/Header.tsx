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
  height: 5rem;
  line-height: 5rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => props.theme.colors.red};
  &:hover {
    cursor: pointer;
  }
`
