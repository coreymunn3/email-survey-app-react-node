import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardFooter: {
    backgroundColor: '#f6f6f6',
  },
});

const SurveyListItem = ({ survey }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h5' color='primary' gutterBottom>
            {survey.title}
          </Typography>
          <Typography variant='subtitle1'>Subject: {survey.subject}</Typography>
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
  );
};

export default SurveyListItem;
