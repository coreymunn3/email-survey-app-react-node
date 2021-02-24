import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeroImage from './HeroImage.jpg';

const useStyles = makeStyles({
  hero: {
    height: '100vh',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${HeroImage})`,
  },
  overlay: {
    position: 'absolute',
    height: '100%',
    widows: '100%',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    zIndex: '10',
    background: 'rgba(0,0,0,0.35)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  overlayTitle: {
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    height: '20%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Hero = () => {
  const classes = useStyles();
  return (
    <section className={classes.hero}>
      <div maxWidth='xs' className={classes.overlay}>
        <Container maxWidth='xs' className={classes.overlayTitle}>
          <Typography variant='h3' align='center'>
            Email Surveys
          </Typography>
          <Typography variant='subtitle1' align='center'>
            Have you ever wanted a dead-simple way to find out what your
            customers think? We just might have exactly what you need.
          </Typography>
        </Container>
        <Container maxWidth='xs' className={classes.buttonContainer}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            href='/auth/google'
          >
            Join Us
          </Button>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
