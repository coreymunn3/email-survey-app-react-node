import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// state
import { useDispatch } from 'react-redux';
import { fetchUser } from './actions/authActions';
// components
import Header from './components/Header';
import Landing from './components/pages/Landing';
import Profile from './components/pages/Profile';

const SurveyForm = () => <h2>SurveyForm</h2>;

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
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/profile' component={Profile}></Route>
        <Route path='/newsurvey' component={SurveyForm}></Route>
      </Router>
    </div>
  );
};

export default App;
