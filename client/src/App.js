import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './css/App.css';
import Navbar from './components/Navbar'
import LatestLaunch from './containers/LatestLaunch'
import PastLaunches from './containers/PastLaunches'
import UpcomingLaunches from './containers/UpcomingLaunches'
import LaunchShow from './components/LaunchShow'
import Rockets from './containers/Rockets'
import Launchpads from './containers/Launchpads'
import Footer from './components/Footer'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="app" style={{ backgroundImage: `url(${require("./images/itl_streak.jpg")})` }  }>
          <Navbar />
          <Route exact path="/" component={LatestLaunch} />
          <Route exact path="/past" component={PastLaunches} />
          <Route path={'/past/:launchId'} component={LaunchShow} />
          <Route exact path="/upcoming" component={UpcomingLaunches} />
          <Route exact path="/rockets" component={Rockets} />
          <Route exact path="/launchpads" component={Launchpads} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
