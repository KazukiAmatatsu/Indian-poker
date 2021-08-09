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

const StyledLayout = styled.div`
  width: 100vw;
  background-color: ${(props) => props.theme.background};
`
