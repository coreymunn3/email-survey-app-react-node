import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Fab,
  Tooltip,
  Typography,
  Divider,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SurveyList from './SurveyList';
import { useDispatch } from 'react-redux';
import { fetchSurveys } from '../../../actions/surveyActions';

// styles from: https://stackoverflow.com/questions/35828991/make-material-ui-reactjs-floatingactionbutton-float
const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  boxSpacing: {
    padding: '2rem 0',
  },
  clearBottom: {
    marginBottom: '2rem',
  },
}));

const Surveys = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSurveys());
  }, []);

  return (
    <Container>
      <div className={classes.boxSpacing}>
        <Typography variant='h4' gutterBottom>
          Your Surveys
        </Typography>
        <Divider className={classes.clearBottom} />
        <SurveyList />
        <Tooltip title='New Survey' aria-label='add'>
          <Fab
            component={Link}
            to='/surveys/new'
            color='secondary'
            className={classes.fab}
          >
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
    </Container>
  );
};

export default Surveys;
