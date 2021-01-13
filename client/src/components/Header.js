import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Header = () => {
  return (
    <AppBar position='static' color='secondary'>
      <Toolbar>
        <IconButton color='inherit' edge='start'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          Email Survey App
        </Typography>
        <div>
          <IconButton
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='inherit'
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
