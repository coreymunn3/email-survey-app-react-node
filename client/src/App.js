import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// state
import { useDispatch } from 'react-redux';
import { fetchUser } from './actions/authActions';
// components
import Header from './components/Header';
import Landing from './components/pages/Landing';
import Profile from './components/pages/Profile';
import Surveys from './components/pages/Surveys';
import SurveyForm from './components/pages/SurveyForm';

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
        <Route path='/newsurvey' component={SurveyForm} />
      </Router>
    </div>
  );
};

export default App;
