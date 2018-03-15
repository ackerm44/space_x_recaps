import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import LatestLaunch from './containers/LatestLaunch'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LatestLaunch} />
        </div>
      </Router>
    );
  }
}

export default App;
