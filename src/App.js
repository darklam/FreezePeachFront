import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './containers/Auth/Auth';

import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/auth' exact component={Auth} />
        <Route path='*' />
      </Switch>
    );
  }
}

export default App;
