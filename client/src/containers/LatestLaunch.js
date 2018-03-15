import React, {Component} from 'react'
import { connect } from 'react-redux';
import { latestLaunchFetchData } from '../actions/latestLaunch';


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

      return (
        <div>
          <h1> Next Launch: {monthNames[month]} {day}, {year}</h1>
          <h3>  {this.props.latestLaunch.rocket.rocket_name}</h3>
          <h3>  {this.props.latestLaunch.launch_site.site_name_long} </h3>
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
