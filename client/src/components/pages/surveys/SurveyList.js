import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SurveyListItem from './SurveyListItem';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  fullScreenProgress: {
    width: '100%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SurveyList = () => {
  const classes = useStyles();
  const { surveys, loading } = useSelector((state) => state.surveys);
  return (
    <Fragment>
      {loading ? (
        <div className={classes.fullScreenProgress}>
          <CircularProgress size={100} />
        </div>
      ) : (
        <Grid container spacing={2} className={classes.root}>
          {surveys.reverse().map((survey, idx) => (
            <SurveyListItem survey={survey} key={idx} />
          ))}
        </Grid>
      )}
    </Fragment>
  );
};

export default SurveyList;
