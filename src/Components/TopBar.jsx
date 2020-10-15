import React from 'react';
import './TopBar.scss';
// import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import { AccountCircle, Notifications } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import plataform from '../Assets/Platform.svg';

function TopBar() {
  console.log(plataform);
  return (
    <header>
      <nav className="topbar-nav">
        <div className="topbar-nav-name">
          <img src={plataform} alt="logo" />
          <div>
            <h2>Value To Go</h2>
            <span>|</span>
            <h4>PwC Perú</h4>
          </div>
        </div>
        <div className="topbar-nav-icons">
          <Notifications className="nav-icons" />
          <AccountCircle className="nav-icons" />
          <ExitToAppIcon className="nav-icons" />
        </div>
      </nav>
    </header>
  );
}

export default TopBar;
