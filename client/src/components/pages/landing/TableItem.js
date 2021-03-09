import React, { Fragment } from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) =>
  createStyles({
    callOut: {
      padding: '1rem 0',
      backgroundColor: '#3f51b5',
      borderBottomRightRadius: '3px',
      borderBottomLeftRadius: '3px',
      color: 'white',
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

const tableItemVariants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duraiton: 1,
    },
  },
};

const TableItem = ({ option: { title, description, benefitsTable } }) => {
  const classes = useStyles();
  return (
    <motion.div className={classes.pricingBlock} variants={tableItemVariants}>
      <Typography variant='h4' gutterBottom align='center'>
        {title}
      </Typography>
      <Table>
        <TableBody>
          {Object.keys(benefitsTable).map((key, idx) => (
            <TableRow key={idx}>
              <TableCell align='center'>{key}</TableCell>
              <TableCell align='center'>{benefitsTable[key]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.callOut}>
        <Typography variant='h6' align='center'>
          {description}
        </Typography>
      </div>
    </motion.div>
  );
};

export default TableItem;
