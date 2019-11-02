import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CategoryNewsPage from './pages/CategoryNewsPage';

const App = () => (
  <React.Fragment>
    <Header />
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:category" component={CategoryNewsPage} />
      </Switch>
    </div>
  </React.Fragment>
);

export default withRouter(App);
