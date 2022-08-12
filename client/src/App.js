import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './css/App.css';
import { connect } from 'react-redux'
import Navbar from './containers/Navbar'
import LatestLaunch from './containers/LatestLaunch'
import PastLaunches from './containers/PastLaunches'
import UpcomingLaunches from './containers/UpcomingLaunches'
import LaunchShow from './containers/LaunchShow'
import Rockets from './containers/Rockets'
import Launchpads from './containers/Launchpads'
import Footer from './components/Footer'
// import News from './containers/News'
// import Stats from './containers/Stats'
import LogInPage from  './containers/LogIn'
import SignUpPage from './containers/SignUp'
import Graphs from './containers/Graphs'
import Cores from'./containers/Cores'
import { rocketsFetchData } from './actions/rockets'




class App extends Component {
  componentDidMount() {
    this.props.fetchRockets(`https://api.spacexdata.com/v4/rockets`)  
  }

  render() {
    return (
      <Router>
        {/*  style={{ backgroundImage: `url(${require("./images/itl_streak.jpg")})` }   */}
        <div className="app">
          <Navbar />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={LogInPage} />
          <Route exact path="/" component={LatestLaunch} />
          <Route exact path="/past" component={PastLaunches} />
          <Route path={'/past/:launchId'} component={LaunchShow} />
          <Route exact path="/upcoming" component={UpcomingLaunches} />
          <Route path={'/upcoming/:launchId'} component={LaunchShow} rockets={this.props.rockets}/>
          <Route exact path="/rockets" component={Rockets} />
          <Route exact path="/launchpads" component={Launchpads} />
          <Route exact path="/stats" component={Graphs} />
          <Route exact path="/cores" component={Cores} />
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    rockets: state.rockets,
    hasErrored: state.rocketsHasErrored,
    isLoading: state.rocketsIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRockets: (url) => dispatch(rocketsFetchData(url)),
    // fetchComments: (url) => dispatch(commentsFetchData(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
