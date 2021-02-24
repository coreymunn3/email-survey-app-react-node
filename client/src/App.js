import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// state
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './actions/authActions';
// components
import Header from './components/navigation/Header';
import Landing from './components/pages/landing/Landing';
import Surveys from './components/pages/surveys/Surveys';
import SurveyForm from './components/pages/surveyForm/SurveyForm';
import SurveyDetail from './components/pages/surveys/SurveyDetail';
import PrivateRoute from './components/navigation/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // get logged in user
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Route exact path='/' component={Landing} />
        <PrivateRoute exact path='/surveys' component={Surveys} />
        <PrivateRoute path='/surveys/survey/:id' component={SurveyDetail} />
        <PrivateRoute exact path='/surveys/new' component={SurveyForm} />
      </Router>
    </div>
  );
};

export default App;
