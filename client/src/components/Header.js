import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  CircularProgress,
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
// state
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../actions/authActions';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {
    setAnchor(e.target);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  // const handleLogin = () => {
  //   history.push('/auth/google');
  // };

  // const handleLogOut = () => {
  //   dispatch(logOut());
  // };

  const renderContent = () => {
    switch (user) {
      case null:
        return <CircularProgress />;
      case false:
        return (
          <Button href='/auth/google' color='inherit'>
            Login with Google
          </Button>
        );
      default:
        return (
          <Fragment>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              color='inherit'
              onClick={handleClick}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchor}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={anchor ? true : false}
              keepMounted
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem component={Link} to='/api/logout'>
                Log Out
              </MenuItem>
            </Menu>
          </Fragment>
        );
    }
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton color='inherit' edge='start'>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          Email Survey App
        </Typography>
        {renderContent()}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
