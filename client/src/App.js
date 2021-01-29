import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// state
import { useDispatch } from 'react-redux';
import { fetchUser } from './actions/authActions';
// components
import Header from './components/navigation/Header';
import Landing from './components/pages/landing/Landing';
import Profile from './components/pages/profile/Profile';
import Surveys from './components/pages/surveys/Surveys';
import SurveyForm from './components/pages/surveyForm/SurveyForm';

const App = () => {
  const dispatch = useDispatch();
  // get logged in user
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Route exact path='/' component={Landing} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/surveys' component={Surveys} />
        <Route exact path='/surveys/new' component={SurveyForm} />
      </Router>
    </div>
  );
};

export default App;
