/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path="/nal" component={CounterPage} />
      <Route path="/pl" component={CounterPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
