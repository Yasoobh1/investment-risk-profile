import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import Questionnaire from './screens/Questionnaire';
import Result from './screens/Result';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/questionnaire" component={Questionnaire} />
        <Route path="/result" component={Result} />
      </Switch>
    </Router>
  );
};

export default App;
