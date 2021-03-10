import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
// smooth scrolling as described in:
// https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
import { Link, animateScroll as scroll } from 'react-scroll';

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
  navItemActive: {
    cursor: 'pointer',
    backgroundColor: 'rgba(0,0,0,0.15)',
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
  // Dynamicall find page scroll position to facilitate
  // the navbar background color change
  const [scrollPos, setScrollPos] = useState(0);
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

  const navLinks = [
    { name: 'Home', sectionId: 'hero' },
    { name: 'Benefits', sectionId: 'benefits' },
    { name: 'How To', sectionId: 'how-it-works' },
    { name: 'Pricing', sectionId: 'pricing' },
  ];
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
        {navLinks.map((link, idx) => (
          <Link
            to={link.sectionId}
            activeClass={classes.navItemActive}
            spy={true}
            smooth={true}
            duration={500}
            key={idx}
            variants={navItemVariants}
            initial='hidden'
            visible='animate'
          >
            <Typography variant='h6' className={classes.navItem}>
              {link.name}
            </Typography>
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

export default StickyNav;
