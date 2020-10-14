import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import { AccountCircle, Notifications } from '@material-ui/icons';

function TopBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Value to go
          </Typography>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <Notifications />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
