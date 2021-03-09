import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles({
  root: {
    padding: '3rem 0',
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

// animation variants
const benefitVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Benefits = ({ benefits }) => {
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
  return (
    <section className={classes.root}>
      <Grid container className={classes.benefitsContainer}>
        {benefits.map((benefit, idx) => (
          <Grid key={idx} item sm={12} md={3}>
            <motion.div
              className={classes.benefitItem}
              variants={benefitVariants}
              initial='hidden'
              animate={controls}
              ref={ref}
            >
              <div>{benefit.icon}</div>
              <Typography variant='h6' align='center' gutterBottom>
                {benefit.name}
              </Typography>
              <Typography variant='body2' align='center'>
                {benefit.description}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Benefits;
