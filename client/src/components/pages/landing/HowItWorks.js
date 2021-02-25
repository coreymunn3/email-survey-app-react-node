import React from 'react';
// theme: https://material-ui.com/styles/api/
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
// images
import CreditCard from './img/CreditCard.jpg';
import FilloutForm from './img/FilloutForm.jpg';
import YesNo from './img/YesNo.jpg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginBottom: '50px',
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
    imageContainer: {
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '2rem',
    },
    image: {
      width: '250px',
      height: '250px',
      borderRadius: '50%',
    },
    text: {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '2rem',
      textAlign: 'center',
      padding: '0 5rem',
    },
    stepImgLeft: {
      display: 'flex',
      padding: '2rem',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // media query: https://stackoverflow.com/questions/45847090/media-queries-in-material-ui-components
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
    },
    stepImgRight: {
      display: 'flex',
      padding: '2rem',
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      alignItems: 'center',
      // media query: https://stackoverflow.com/questions/45847090/media-queries-in-material-ui-components
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
    },
  })
);

const HowItWorks = () => {
  const classes = useStyles();
  return (
    <section className={classes.primaryBg}>
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography variant='h6'>
            Valuable Customer Feedback in 3 Easy Steps
          </Typography>
        </div>
        <div className={classes.stepImgLeft}>
          <div className={classes.imageContainer}>
            <img src={CreditCard} className={classes.image}></img>
          </div>
          <div className={classes.text}>
            <Typography variant='h4' gutterBottom>
              Purchase Credits
            </Typography>
            <Typography variant='body2'>
              5 Dollars for 5 Credits, and sending out a survey starts at only 1
              Credit. Purchases are routed securely through Stripe, so we never
              save your card information.
            </Typography>
          </div>
        </div>
        <div className={classes.stepImgRight}>
          <div className={classes.text}>
            <Typography variant='h4' gutterBottom>
              Create Your Survey
            </Typography>
            <Typography variant='body2'>
              Using a simple form, create your survey with a Title, Subject, and
              Body. List the recipients, and our email engine does the rest!
            </Typography>
          </div>
          <div className={classes.imageContainer}>
            <img src={FilloutForm} className={classes.image}></img>
          </div>
        </div>
        <div className={classes.stepImgLeft}>
          <div className={classes.imageContainer}>
            <img src={YesNo} className={classes.image}></img>
          </div>
          <div className={classes.text}>
            <Typography variant='h4' gutterBottom>
              Monitor Responses In A Real Time Dashbaord
            </Typography>
            <Typography variant='body2'>
              Your Recipients can Respond via Links provided in the Email. Using
              a Webhook, We Record Those Responses in Real Time.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
