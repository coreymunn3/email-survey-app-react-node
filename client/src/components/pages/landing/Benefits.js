import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginBottom: '50px',
    maxWidth: '1200px',
    margin: 'auto',
  },
  benefitsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
  },
  benefitItem: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2rem 3rem',
  },
  benefitIcon: {
    margin: '20px 0',
  },
});

const Benefits = ({ benefits }) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Grid container className={classes.benefitsContainer}>
        {benefits.map((benefit, idx) => (
          <Grid key={idx} item sm={12} md={3} className={classes.benefitItem}>
            <Fragment>{benefit.icon}</Fragment>
            <Typography variant='h6' align='center' gutterBottom>
              {benefit.name}
            </Typography>
            <Typography variant='body2' align='center'>
              {benefit.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Benefits;
