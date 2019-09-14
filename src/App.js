import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomePage from './page/HomePage';

const history = createBrowserHistory();

const App = () => (
  <>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  </>
);

export default App;
