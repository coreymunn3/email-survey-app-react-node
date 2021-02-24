import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    display: 'flex',
    alignItems: 'center',
    zIndex: '99',
    position: 'fixed',
    top: '0',
    width: '100%',
    justifyContent: 'space-between',
  },
  navGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  navItem: {
    padding: '1rem',
    fontWeight: 'lighter',
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'rgba(0,0,0,0.15)',
    },
  },
});

const StickyNav = () => {
  const classes = useStyles();
  return (
    <nav aria-roledescription='navigation' className={classes.navbar}>
      <div className={classes.navGroup}>
        <Typography className={classes.navItem}>Home</Typography>
        <Typography className={classes.navItem}>About</Typography>
        <Typography className={classes.navItem}>Contact</Typography>
      </div>
      <div className={classes.navGroup}>
        <Typography className={classes.navItem}>How it Works</Typography>
        <Typography className={classes.navItem}>Pricing</Typography>
      </div>
    </nav>
  );
};

export default StickyNav;
