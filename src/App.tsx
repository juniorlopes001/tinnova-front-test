import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  BodyHalfBackgroundGray,
  BodyHalfBackgroundPurple,
  Container,
  WrapperBackground,
} from "./components/LayoutStyles/Styles";
import UserNew from "./pages/Users/UserNew/UserNew";
import Users from "./pages/Users/Users/Users";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path="/new-user">
          <UserNew />
        </Route>
        <Route exact path="/edit-user/:cpf">
          <UserNew />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
