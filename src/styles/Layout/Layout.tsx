import { FC } from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

export const Layout: FC = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </StyledLayout>
  )
}

const StyledLayout = styled.body`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
`
