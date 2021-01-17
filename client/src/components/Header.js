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
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
// state
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((state) => state.auth);
  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {
    setAnchor(e.target);
  };

  const handleClose = () => {
    setAnchor(null);
  };

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
              <MenuItem component={Link} to='/profile' onClick={handleClose}>
                Profile
              </MenuItem>
              <MenuItem
                component={Button}
                href='/api/logout'
                style={{ textTransform: 'none' }}
              >
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
        <IconButton
          component={Link}
          to={user ? '/profile' : '/'}
          color='inherit'
          edge='start'
        >
          <HomeIcon />
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
