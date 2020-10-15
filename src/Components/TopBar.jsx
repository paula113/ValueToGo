import React from 'react';
import './TopBar.scss';
// import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import { AccountCircle, Notifications } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from '../Assets/Logo.svg';
import quickValue from '../Assets/quickValue.png';
// import { signOut } from '../API/auth';
import { auth } from '../firebase.config';

function TopBar() {
  const signOut = () =>
    auth
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  return (
    <header>
      <nav className="topbar-nav">
        <div className="topbar-nav-name">
          <img src={logo} alt="logo" className="topbar-nav-name-logo" />
          <span>|</span>
          <div className="topbar-nav-name-content">
            <img
              src={quickValue}
              alt="logo qick value"
              className="topbar-nav-name-content-quick"
            />
          </div>
        </div>
        <div className="topbar-nav-icons">
          <Notifications className="nav-icons" />
          <AccountCircle className="nav-icons" />
          <ExitToAppIcon className="nav-icons" onClick={console.log('salir')} />
        </div>
      </nav>
    </header>
  );
}

export default TopBar;
