import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import { theme } from 'styles/theme'
import { Layout } from 'styles/Layout/Layout'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Top, Standby, Room } from 'Pages'

import { RecoilRoot, MutableSnapshot } from 'recoil'
import { user } from 'recoil/atom'
import { RecoilStatePersist } from 'recoil/RecoilStatePersist'
import RedirectTop from 'components/RedirectTop'

function App() {
  const initializeState = (mutableSnapshot: MutableSnapshot) => {
    const User = localStorage.getItem(user.key)
    if (User) {
      mutableSnapshot.set(user, JSON.parse(User).value)
    }
  }
  return (
    <RecoilRoot initializeState={initializeState}>
      <RecoilStatePersist />
      <Router>
        <RedirectTop />
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Switch>
              <Route exact path="/" component={Top} />
              <Route exact path="/Standby" component={Standby} />
              <Route exact path="/Room/:id" component={Room} />
            </Switch>
          </Layout>
        </ThemeProvider>
      </Router>
    </RecoilRoot>
  )
}

export default App
