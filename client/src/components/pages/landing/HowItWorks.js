import React from 'react';
// theme: https://material-ui.com/styles/api/
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import HowItWorksStep from './HowItWorksStep';

const useStyles = makeStyles((theme) =>
  createStyles({
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
  })
);

const HowItWorks = ({ howItWorks }) => {
  const classes = useStyles();

  return (
    <section className={classes.primaryBg}>
      <div className={classes.container}>
        <div className={classes.title}>
          <Typography variant='h6'>
            Valuable Customer Feedback in 3 Easy Steps
          </Typography>
        </div>
        {howItWorks.map((step) => (
          <HowItWorksStep
            key={step.number}
            step={step}
            direction={step.number % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
