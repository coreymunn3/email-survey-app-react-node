import React, { useEffect } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TableItem from './TableItem';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: '3rem 0',
      maxWidth: '1200px',
      margin: 'auto',
    },
    pricingTable: {
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    pricingBlock: {
      border: '2px solid #3f51b5',
      padding: '2rem 0 0 0',
      width: '30%',
      borderRadius: '5px',
      margin: '0 20px',
      [theme.breakpoints.down('sm')]: {
        width: '60%',
        margin: '20px 0',
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
  })
);

const pricingTableVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: '0.25',
    },
  },
};

const PricingTable = ({ pricingOptions }) => {
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
      <Typography variant='h6' gutterBottom align='center'>
        Pricing
      </Typography>
      <Typography variant='body2' align='center'>
        No Matter Who You Are, We Got You Covered
      </Typography>
      <motion.div
        className={classes.pricingTable}
        variants={pricingTableVariants}
        ref={ref}
        initial='hidden'
        animate={controls}
      >
        {pricingOptions.map((option, idx) => (
          <TableItem option={option} key={idx} />
        ))}
      </motion.div>
    </section>
  );
};

export default PricingTable;
