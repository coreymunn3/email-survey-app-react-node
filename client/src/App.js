import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// state
import { useDispatch } from 'react-redux';
import { fetchUser } from './actions/authActions';
// components
import Header from './components/Header';

const Surveys = () => <h2>Surveys</h2>;
const Landing = () => <h2>Landing</h2>;
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
        <Route exact path='/surveys' component={Surveys}></Route>
        <Route path='/surveys/new' component={SurveyForm}></Route>
      </Router>
    </div>
  );
};

export default App;
