import { FC } from 'react'
import styled from 'styled-components'

export const Main: FC = ({ children }) => {
  return <StyledBody>{children}</StyledBody>
}

const StyledBody = styled.div`
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 7rem;
`
