import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Top, StandBy, Game } from './Pages'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">TOP</Link>
        </li>
        <li>
          <Link to="/StandBy">StandBy</Link>
        </li>
        <li>
          <Link to="/Game">Game</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route exact path="/StandBy" component={StandBy} />
        <Route exact path="/Game" component={Game} />
      </Switch>
    </Router>
  )
}

export default App
