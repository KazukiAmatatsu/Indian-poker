import { FC } from 'react'
import styled from 'styled-components'

export const Main: FC = ({ children }) => {
  return <StyledBody>{children}</StyledBody>
}

const StyledBody = styled.div`
  width: 100%;
  padding: 3rem 0;
`
