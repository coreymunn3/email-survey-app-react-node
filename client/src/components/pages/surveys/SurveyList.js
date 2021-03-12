import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SurveyListItem from './SurveyListItem';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '0',
  },
  fullScreenProgress: {
    width: '100%',
    height: '50vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noContent: {
    textAlign: 'center',
    padding: '0.5rem 1rem',
    background: '#f4f4f4',
    borderRadius: '5px',
  },
});

const SurveyList = () => {
  const classes = useStyles();
  const { surveys, filteredSurveys, loading } = useSelector(
    (state) => state.surveys
  );

  const renderSurveys = () => {
    if (filteredSurveys) {
      return filteredSurveys.map((survey, idx) => (
        <SurveyListItem survey={survey} key={idx} />
      ));
    } else {
      return surveys.map((survey, idx) => (
        <SurveyListItem survey={survey} key={idx} />
      ));
    }
  };

  return (
    <Fragment>
      {loading ? (
        <div className={classes.fullScreenProgress}>
          <CircularProgress size={100} />
        </div>
      ) : (
        <Grid container spacing={2} className={classes.root}>
          {surveys.length === 0 ? (
            <Typography className={classes.noContent}>
              You Don't Have Any Surveys Yet.
            </Typography>
          ) : (
            renderSurveys()
          )}
        </Grid>
      )}
    </Fragment>
  );
};

export default SurveyList;
