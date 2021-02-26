import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginBottom: '50px',
      maxWidth: '1200px',
      margin: 'auto',
    },
    pricingTable: {
      padding: '2rem',
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
    callOut: {
      padding: '1rem 0',
      backgroundColor: '#3f51b5',
      borderBottomRightRadius: '3px',
      borderBottomLeftRadius: '3px',
      color: 'white',
    },
  })
);

const PricingTable = ({ pricingOptions }) => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Typography variant='h6' gutterBottom align='center'>
        Pricing Options to Get Started
      </Typography>
      <div className={classes.pricingTable}>
        {pricingOptions.map(({ title, description, benefitsTable }, idx) => (
          <Paper key={idx} className={classes.pricingBlock}>
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
          </Paper>
        ))}
      </div>
    </section>
  );
};

export default PricingTable;
