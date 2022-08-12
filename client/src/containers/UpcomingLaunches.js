import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upcomingLaunchesFetchData } from '../actions/upcomingLaunches'
import {rocketsFetchData} from '../actions/rockets'
import Launch from '../components/Launch'
import '../css/launchIndex.css'


class UpcomingLaunches extends Component {
  componentDidMount() {
    this.props.fetchData('https://api.spacexdata.com/v4/launches/upcoming')
  }
  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the latest Launch</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <div>
        <h1 className="title">Upcoming Launches</h1>
        <div className="launchesIndex">
          { this.props.upcomingLaunches.map(launch =>
            <Launch key={launch.id.toString()} launch={launch} rockets={this.props.rockets}/>
          )}
        </div>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    // upcomingLaunches: state.upcomingLaunches,
    upcomingLaunches: state.upcomingLaunches.filter(launch => launch.date_unix > (new Date().getTime() / 1000)),
    hasErrored: state.upcomingLaunchesHasErrored,
    isLoading: state.upcomingLaunchesIsLoading,
    // rockets: state.rockets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(upcomingLaunchesFetchData(url)),
    // fetchRockets: (rocketUrl) => dispatch(rocketsFetchData(rocketUrl))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingLaunches)
