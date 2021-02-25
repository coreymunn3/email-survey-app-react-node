import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  navbarTransparent: {
    backgroundColor: 'rgba(0,0,0,0.0)',
    display: 'flex',
    alignItems: 'center',
    zIndex: '99',
    position: 'fixed',
    top: '0',
    width: '100%',
    justifyContent: 'space-between',
    transition: 'background-color 1s ease 0s',
  },
  navbarSolid: {
    backgroundColor: 'rgba(0,0,0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    zIndex: '99',
    position: 'fixed',
    top: '0',
    width: '100%',
    justifyContent: 'space-between',
    transition: 'background-color 1s ease 0s',
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
  // find scroll position
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = () => {
    setScrollPos(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const classes = useStyles();
  return (
    <nav
      aria-roledescription='navigation'
      className={
        scrollPos > 650 ? classes.navbarSolid : classes.navbarTransparent
      }
    >
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
