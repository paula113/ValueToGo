import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Gerente from './Views/Gerente';
import Socio from './Views/Socio';
import Client from './Views/Client';
import Login from './Views/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/gerente">
          <Gerente />
        </Route>
        <Route path="/socio">
          <Socio />
        </Route>
        <Route path="/client">
          <Client />
        </Route>
      </Switch>
      {/* { isLogin &&  <Redirect to="/home" />} */}
    </Router>
  );
}

export default App;
