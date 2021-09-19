import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Input } from './components/Input/Input';
import Users from './pages/Users/Users/Users';
import UserNew from './pages/Users/UserNew/UserNew';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Users/>
        </Route>
        <Route exact path='/new-user'>
          <UserNew/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
