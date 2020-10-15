/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MainLayout from './Components/layout/MainLayout';
import Loader from './Components/Loader';

import Gerente from './Views/Gerente';
import Socio from './Views/Socio';
import Client from './Views/Client';
import Login from './Views/Login';
import { auth } from './firebase.config';

function LoggedInRoute({ children, isUserLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (isUserLoggedIn) {
          return <MainLayout>{children}</MainLayout>;
        }
        return <Redirect to="/" />;
      }}
    />
  );
}

function NonLoggedInRoute({ children, isUserLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if (!isUserLoggedIn) {
          return <>{children}</>;
        }
        return <Redirect to="/client" />;
      }}
    />
  );
}

function App() {
  // valor inicial de isUserLoggedIn es false
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsUserLoggedIn(true);
        console.log('logeado');
      } else {
        setIsUserLoggedIn(false); // cambiar a false
        console.log('no está logueado');
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Switch>
        <NonLoggedInRoute isUserLoggedIn={isUserLoggedIn} exact path="/">
          <Login />
        </NonLoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} exact path="/client">
          <Client />
        </LoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} exact path="/socio">
          <Socio />
        </LoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} exact path="/gerente">
          <Gerente />
        </LoggedInRoute>
      </Switch>
    </Router>
  );
}

export default App;
