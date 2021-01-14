import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// state
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton color='inherit' edge='start'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          Email Survey App
        </Typography>
        <div>
          <Button color='inherit'>Login</Button>
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
