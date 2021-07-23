import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Top, Standby, Room, Game } from './Pages'

import { RecoilRoot } from 'recoil'

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
          <li>
            <Link to="/Game">Game</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/Standby" component={Standby} />
          <Route exact path="/Room/:id" component={Room} />
          <Route exact path="/Game" component={Game} />
        </Switch>
      </Router>
    </RecoilRoot>
  )
}

export default App
