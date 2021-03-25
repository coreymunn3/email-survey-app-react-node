import React from 'react';
import { Fragment } from 'react';
import { Container, Typography, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
  },
});

const Confirmation = () => {
  const { loading, error } = useSelector((state) => state.surveys);
  const classes = useStyles();
  const success = !loading && !error;
  const failure = !loading && error;
  return (
    <Container className={classes.root}>
      {loading && <CircularProgress size={100} />}
      {success && (
        <Fragment>
          <Typography variant='h4'>Thank you for Using our Serivce</Typography>
          <Typography variant='body1'>Your Email Has Been Sent!</Typography>
        </Fragment>
      )}
      {failure && (
        <Fragment>
          <Typography variant='h4' color='secondary' align='center'>
            {error}
          </Typography>
        </Fragment>
      )}
    </Container>
  );
};

export default Confirmation;
