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
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';
import { fetchSurveys } from '../../../actions/surveyActions';
import { motion } from 'framer-motion';
import containerVariants from '../pageTransitions';

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
    marginBottom: '1rem',
  },
}));

const Surveys = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSurveys());
  }, []);

  return (
    <Container
      component={motion.div}
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className={classes.boxSpacing}>
        <Typography variant='h4' gutterBottom>
          Your Surveys
        </Typography>
        <SearchBar />
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
