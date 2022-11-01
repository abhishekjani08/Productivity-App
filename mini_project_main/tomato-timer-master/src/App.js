import React from 'react';

import { Redirect, Switch, Route } from 'react-router-dom';

import { Navigation } from './components/Common/';
import TimerPage from './containers/Timer';
import SettingsPage from './containers/Settings';

const App = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={TimerPage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
