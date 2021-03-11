import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
// state
import { useDispatch } from 'react-redux';
import { fetchUser } from './actions/authActions';
import { AnimatePresence } from 'framer-motion';
// components
import Landing from './components/pages/landing/Landing';
import Surveys from './components/pages/surveys/Surveys';
import SurveyForm from './components/pages/surveyForm/SurveyForm';
import SurveyDetail from './components/pages/surveyDetail/SurveyDetail';
import PrivateRoute from './components/navigation/PrivateRoute';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  // get logged in user
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/' component={Landing} />
          <PrivateRoute exact path='/surveys' component={Surveys} />
          <PrivateRoute path='/surveys/survey/:id' component={SurveyDetail} />
          <PrivateRoute exact path='/surveys/new' component={SurveyForm} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
