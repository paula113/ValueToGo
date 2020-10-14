import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="client/Detalles">Home</Link>
            </li>
            <li>
              <Link to="client/Reportes">About</Link>
            </li>
            <li>
              <Link to="client/Expedientes">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/client">
            <h1>dd</h1>
          </Route>
          <Route path="/client">
            <h2>hi</h2>
          </Route>
          <Route path="/client">
            <h3>vv</h3>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
