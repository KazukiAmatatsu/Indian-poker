import { FC } from 'react'
import styled from 'styled-components'
import { sp, tab } from 'media'

export const Main: FC = ({ children }) => {
  return <StyledBody>{children}</StyledBody>
}

const StyledBody = styled.div`
  width: 90%;
  min-height: 80vh;
  padding: 10vh 0;
  margin: 0 auto;
  text-align: center;
  ${tab`
    min-height: 86vh;
    padding: 7vh 0;
  `}
  ${sp`
    min-height: 88vh;
    padding: 6vh 0;
  `}
`
