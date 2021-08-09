import { FC } from 'react'
import styled from 'styled-components'

export const Main: FC = ({ children }) => {
  return <StyledBody>{children}</StyledBody>
}

const StyledBody = styled.div`
  width: 90%;
  min-height: 80vh;
  padding: 10vh 0;
  margin: 0 auto;
  text-align: center;
`
