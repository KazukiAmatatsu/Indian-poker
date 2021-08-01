import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import { theme } from 'styles/theme'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <ul>
            <li>
              <Link to="/">TOP</Link>
            </li>
            <li>
              <Link to="/Standby">Standby</Link>
            </li>
            <li>
              <Link to="/Room">Room</Link>
            </li>
          </ul>
          <RedirectTop />
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/Standby" component={Standby} />
            <Route exact path="/Room/:id" component={Room} />
          </Switch>
        </Router>
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
