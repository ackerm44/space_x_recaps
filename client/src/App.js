import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import LatestLaunch from './containers/LatestLaunch'
import PastLaunches from './containers/PastLaunches'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LatestLaunch} />
          <Route exact path="/past" component={PastLaunches} />
        </div>
      </Router>
    );
  }
}

export default App;
