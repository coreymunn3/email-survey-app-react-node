import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Badge,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PersonIcon from '@material-ui/icons/Person';
import CheckoutButton from './CheckoutButton';
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
      case false:
        return (
          <Button href='/auth/google' color='secondary' variant='contained'>
            <PersonIcon />
            Login with Google
          </Button>
        );
      default:
        return (
          <Fragment>
            <CheckoutButton />
            <IconButton aria-label='account balance'>
              <Badge badgeContent={user.credits} color='secondary'>
                <AccountBalanceIcon style={{ fill: 'white' }} />
              </Badge>
            </IconButton>
            <IconButton
              aria-label='user profile'
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
              <MenuItem component={Link} to='/surveys' onClick={handleClose}>
                Your Surveys
              </MenuItem>
              <MenuItem
                component={Button}
                href='/logout'
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
          to={user ? '/surveys' : '/'}
          color='inherit'
          edge='start'
        >
          <HomeIcon />
        </IconButton>
        <Typography variant='h6' style={{ flexGrow: 1 }}>
          Email Surveys
        </Typography>
        {renderContent()}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
