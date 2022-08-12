import React, {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import '../css/latestLaunch.css'
import Moment from 'react-moment';
import 'moment-timezone';
import { upcomingLaunchesFetchData } from '../actions/upcomingLaunches';
import Countdown from '../components/Countdown'
import {DateFormat} from '../components/DateFormat'


class LatestLaunch extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.spacexdata.com/v4/launches/upcoming');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the latest Launch</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    if (this.props.upcomingLaunches.length > 0  ){
      const nextLaunch = determineNextLaunch(this.props.upcomingLaunches)
      return (
        <div className="nextLaunch">
          <h1 className="title">NEXT LAUNCH</h1>
          <h1 style={{margin: 0}}><DateFormat date={nextLaunch.date_utc}/></h1>
          <h1 style={{margin: 0}}><Moment format="hh:mm:ss a ( UTC  Z)" >{nextLaunch.date_utc}</Moment></h1>
          <Countdown liftoff={nextLaunch.date_utc} />
          {/* <h2> Rocket: {nextLaunch.rocket.rocket_name}</h2> */}
          {/* <h2> Launchpad: {nextLaunch.launch_site.site_name_long} </h2> */}
          <Link className="button" to={`/upcoming/${nextLaunch.id}`}>More Information</Link>
        </div>
      )
    } else {
      return <p>Loading…</p>;
    }

  }
}

const determineNextLaunch = (launches) => {
  let currentUnix = Math.floor(new Date().getTime() / 1000)
  return launches.find((launch) => launch.date_unix > currentUnix)
}


const mapStateToProps = state => {
  return {
    upcomingLaunches: state.upcomingLaunches,
    hasErrored: state.upcomingLaunchesHasErrored,
    isLoading: state.upcomingLaunchesIsLoading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(upcomingLaunchesFetchData(url))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LatestLaunch)
