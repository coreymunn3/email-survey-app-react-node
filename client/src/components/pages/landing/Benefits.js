import React from 'react';
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

const Benefits = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Grid container className={classes.benefitsContainer}>
        <Grid item sm={12} md={3} className={classes.benefitItem}>
          <VerifiedUserIcon
            color='primary'
            fontSize='large'
            className={classes.benefitIcon}
          />
          <Typography variant='h6' align='center' gutterBottom>
            Secure
          </Typography>
          <Typography variant='body2' align='center'>
            Your Data is kept private, where only you can view it.
          </Typography>
        </Grid>
        <Grid item sm={12} md={3} className={classes.benefitItem}>
          <DirectionsRunIcon
            color='primary'
            fontSize='large'
            className={classes.benefitIcon}
          />
          <Typography variant='h6' align='center' gutterBottom>
            Fast
          </Typography>
          <Typography variant='body2' align='center'>
            Sending out emails to thousands of recipients takes only a few
            seconds
          </Typography>
        </Grid>
        <Grid item sm={12} md={3} className={classes.benefitItem}>
          <MoneyOffIcon
            color='primary'
            fontSize='large'
            className={classes.benefitIcon}
          />
          <Typography variant='h6' align='center' gutterBottom>
            Cheap
          </Typography>
          <Typography variant='body2' align='center'>
            Only $1 to send out a survey, to whover you want
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default Benefits;
