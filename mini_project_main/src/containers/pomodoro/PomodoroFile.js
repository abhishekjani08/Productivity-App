import React from 'react';

import { Redirect, Switch, Route } from 'react-router-dom';

import { Navigation } from './src/components/Common/Navbar';
import TimerPage from './src/containers/Timer';
import SettingsPage from './src/containers/Settings/Settings';

function PomodoroFile () {
  return (
    <div>
      <TimerPage/>
      <h1>Hello World</h1>
    
      <header>
        <Navigation />
      </header>
      <main>
        <Switch>
          <Route exact path="/timerpage" component={TimerPage} />
          <Route exact path="/settings" component={SettingsPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default PomodoroFile;
