import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Top, HostStandby, GuestStandby, Room, Game } from './Pages'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">TOP</Link>
        </li>
        <li>
          <Link to="/HostStandby">hostStandby</Link>
        </li>
        <li>
          <Link to="/GuestStandby">GuestStandby</Link>
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
        <Route exact path="/HostStandby" component={HostStandby} />
        <Route exact path="/GuestStandby" component={GuestStandby} />
        <Route exact path="/StandBy" component={Room} />
        <Route exact path="/Game" component={Game} />
      </Switch>
    </Router>
  )
}

export default App
