/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import NextActionsPage from './containers/NextActionsPage';
import ProjectsListPage from './containers/ProjectsListPage';

export default () => (
  <App>
    <Switch>
      <Route path="/nal" component={NextActionsPage} />
      <Route path="/pl" component={ProjectsListPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
