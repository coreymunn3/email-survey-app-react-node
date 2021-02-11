import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  gridItem: {
    minWidth: '300px',
  },
});

const SurveyList = () => {
  const classes = useStyles();
  const { surveys } = useSelector((state) => state.surveys);
  console.log(surveys);
  return (
    <Grid container spacing={2} className={classes.root}>
      {surveys.map((survey) => (
        <Grid item className={classes.gridItem} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography variant='subtitle1'>{survey.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SurveyList;
