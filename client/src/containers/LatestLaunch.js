import React, {Component} from 'react'
import { connect } from 'react-redux';
import '../css/latestLaunch.css'
import Moment from 'react-moment';
import 'moment-timezone';
import { latestLaunchFetchData } from '../actions/latestLaunch';
import Countdown from '../components/Countdown'


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

    if (this.props.latestLaunch.length !== 0 ){
      let launchDate = new Date(this.props.latestLaunch.launch_date_utc);
      let monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"
      ];

      let day = launchDate.getDate();
      let month = launchDate.getMonth();
      let year = launchDate.getFullYear();

      // var zone_name =  moment.tz.guess();
      // var timezone = moment.tz(moment.tz.guess()).zoneAbbr()

      return (
        <div className="nextLaunch">
          <h1> Next Launch: {monthNames[month]} {day}, {year}</h1>
          <Moment format="hh:mm:ss a ( UTC  Z)" >{this.props.latestLaunch.launch_date_utc}</Moment>
          <Countdown liftoff={this.props.latestLaunch.launch_date_utc} />
          <h3> Rocket: {this.props.latestLaunch.rocket.rocket_name}</h3>
          <h3> Launchpad: {this.props.latestLaunch.launch_site.site_name_long} </h3>
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
