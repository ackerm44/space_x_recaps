import React, {Component} from 'react'
import { connect } from 'react-redux';
import '../css/latestLaunch.css'
import Moment from 'react-moment';
import 'moment-timezone';
import { latestLaunchFetchData } from '../actions/latestLaunch';
import Countdown from '../components/Countdown'
import DateFormat from '../components/DateFormat'


class LatestLaunch extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.spacexdata.com/v2/launches/upcoming');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the latest Launch</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    if (this.props.latestLaunch.length !== 0  ){
      return (
        <div className="nextLaunch">
          <h1 className="title">NEXT LAUNCH</h1>
          <h1><DateFormat date={this.props.latestLaunch.launch_date_utc}/></h1>
          <h1><Moment format="hh:mm:ss a ( UTC  Z)" >{this.props.latestLaunch.launch_date_utc}</Moment></h1>
          <Countdown liftoff={this.props.latestLaunch.launch_date_utc} />
          <h2> Rocket: {this.props.latestLaunch.rocket.rocket_name}</h2>
          <h2> Launchpad: {this.props.latestLaunch.launch_site.site_name_long} </h2>
          <a href={this.props.latestLaunch.links.reddit_campaign} target="_blank">More Information</a>
        </div>
      )
    } else {
      return <p>Loading…</p>;
    }

  }
}


const mapStateToProps = state => {
  return {
    latestLaunch: state.latestLaunch,
    hasErrored: state.latestLaunchHasErrored,
    isLoading: state.latestLaunchIsLoading
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(latestLaunchFetchData(url))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LatestLaunch)
