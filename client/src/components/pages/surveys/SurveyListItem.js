import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Button,
} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const useStyles = makeStyles({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardFooter: {
    backgroundColor: '#f6f6f6',
    padding: '0',
    height: '50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
          <Chip
            style={{ marginRight: '15px' }}
            avatar={<ThumbUpIcon />}
            label={`Yes: ${survey.yes}`}
            color='primary'
          />
          <Chip avatar={<ThumbDownIcon />} label={`No: ${survey.no}`} />

          <Typography color='textSecondary' variant='body2'>
            {'Sent On '}
            {new Date(survey.dateSent).toLocaleDateString()}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardFooter}>
          <Button component={Link} to={`/surveys/survey/${survey._id}`}>
            View Detail
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SurveyListItem;
