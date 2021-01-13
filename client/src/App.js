import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';

const Dashboard = () => <h2>Dashboard</h2>;
const Landing = () => <h2>Landing</h2>;
const SurveyForm = () => <h2>SurveyForm</h2>;

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/surveys' component={Dashboard}></Route>
        <Route path='/surveys/new' component={SurveyForm}></Route>
      </Router>
    </div>
  );
};

export default App;
