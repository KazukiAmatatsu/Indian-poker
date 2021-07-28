import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Top, Standby, Room } from 'Pages'

import { RecoilRoot, MutableSnapshot } from 'recoil'
import { user, room } from 'recoil/atom'
import { RecoilStatePersist } from 'recoil/RecoilStatePersist'
import RedirectTop from 'components/RedirectTop'

function App() {
  const initializeState = (mutableSnapshot: MutableSnapshot) => {
    const User = localStorage.getItem(user.key)
    if (User) {
      mutableSnapshot.set(user, JSON.parse(User).value)
    }
    const Room = localStorage.getItem(room.key)
    if (Room) {
      mutableSnapshot.set(user, JSON.parse(Room).value)
    }
  }
  return (
    <RecoilRoot initializeState={initializeState}>
      <RecoilStatePersist />
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
