import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Divider,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardContent: {
    flex: '1 0 auto',
    alignItems: 'flex-end',
  },
  cardFooter: {
    backgroundColor: '#f6f6f6',
  },
});

const SurveyList = () => {
  const classes = useStyles();
  const { surveys } = useSelector((state) => state.surveys);
  console.log(surveys);
  return (
    <Grid container spacing={2} className={classes.root}>
      {surveys.reverse().map((survey, idx) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant='h5' color='primary' gutterBottom>
                {survey.title}
              </Typography>
              <Typography variant='subtitle1'>
                Subject: {survey.subject}
              </Typography>
              <Typography variant='subtitle1'>Body:</Typography>
              <Typography>{survey.body}</Typography>
              <Typography color='textSecondary' variant='body2'>
                {'Sent On '}
                {new Date(survey.dateSent).toLocaleDateString()}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardFooter}>
              <Typography>Yes and No</Typography>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SurveyList;
