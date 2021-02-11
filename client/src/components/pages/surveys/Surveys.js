import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Fab, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SurveyList from './SurveyList';

// styles from: https://stackoverflow.com/questions/35828991/make-material-ui-reactjs-floatingactionbutton-float
const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Surveys = () => {
  const classes = useStyles();
  return (
    <Container>
      <h1>Your Surveys</h1>
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
    </Container>
  );
};

export default Surveys;
