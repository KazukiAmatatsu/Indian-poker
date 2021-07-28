import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Top, Standby, Room } from 'Pages'

import { RecoilRoot } from 'recoil'
import RedirectTop from 'components/RedirectTop'

function App() {
  return (
    <RecoilRoot>
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
    </RecoilRoot>
  )
}

export default App
