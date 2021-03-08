import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

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

const navVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const navItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const StickyNav = () => {
  const classes = useStyles();
  // find scroll position
  const [scrollPos, setScrollPos] = useState(0);
  // set desired transition position
  const transitionAt = 50;
  const handleScroll = () => {
    setScrollPos(window.pageYOffset);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = ['Home', 'About', 'How To', 'Pricing', 'Contact'];
  return (
    <nav
      aria-roledescription='navigation'
      className={
        scrollPos > transitionAt
          ? classes.navbarSolid
          : classes.navbarTransparent
      }
    >
      <motion.div
        variants={navVariants}
        initial='hidden'
        animate='visible'
        className={classes.navGroup}
      >
        {navLinks.map((linkName, idx) => (
          <Typography
            key={idx}
            component={motion.h6}
            variants={navItemVariants}
            initial='hidden'
            visible='animate'
            className={classes.navItem}
          >
            {linkName}
          </Typography>
        ))}
      </motion.div>
    </nav>
  );
};

export default StickyNav;
