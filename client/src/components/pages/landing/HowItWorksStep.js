import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

// using scroll animation effects as described in
// https://javascript.plainenglish.io/animate-when-element-is-in-view-with-framer-motion-63b254403bf

const useStyles = makeStyles((theme) =>
  createStyles({
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
        flexDirection: 'row-reverse',
      },
    },
  })
);

const HowItWorksStep = ({ step, direction }) => {
  const classes = useStyles();
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (!inView) {
      controls.start('hidden');
    }
  }, [controls, inView]);

  // variants for animation
  const createStepVariants = (direction) => {
    const xStartPost = direction === 'right' ? 50 : -50;
    return {
      hidden: { opacity: 0, x: xStartPost },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: 0.25,
        },
      },
    };
  };

  return (
    <motion.div
      ref={ref}
      variants={createStepVariants(direction)}
      initial='hidden'
      animate={controls}
      key={step.number}
      className={
        direction === 'right' ? classes.stepImgRight : classes.stepImgLeft
      }
    >
      <div className={classes.imageContainer}>
        <img src={step.image} className={classes.image}></img>
      </div>
      <div className={classes.text}>
        <Typography variant='h4' gutterBottom>
          {step.content.title}
        </Typography>
        <Typography variant='body2'>{step.content.description}</Typography>
      </div>
    </motion.div>
  );
};

export default HowItWorksStep;
