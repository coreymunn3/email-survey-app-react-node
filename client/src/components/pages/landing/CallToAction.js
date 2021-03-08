import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    padding: '2rem 0',
    maxWidth: '1200px',
    margin: 'auto',
  },
  primaryBg: {
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  title: {
    textAlign: 'center',
    padding: '3rem',
  },
  buttonSpacing: {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center',
    transform: 'scale(1.4)',
  },
});

const CallToAction = () => {
  const classes = useStyles();
  return (
    <section className={classes.primaryBg}>
      <div className={classes.container}>
        <Typography className={classes.title} variant='h4' gutterBottom>
          So What Are You Waiting For?
        </Typography>
        <div className={classes.buttonSpacing}>
          <Button
            variant='contained'
            color='secondary'
            size='large'
            href='/auth/google'
          >
            Get Started Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
