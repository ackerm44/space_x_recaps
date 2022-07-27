import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upcomingLaunchesFetchData } from '../actions/upcomingLaunches'
import UpcomingLaunchCard from '../components/UpcomingLaunchCard'
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
          { console.log(this.props.upcomingLaunches) }
          { this.props.upcomingLaunches.map(launch =>
            <UpcomingLaunchCard key={launch.id.toString()} launch={launch} />
          )}
        </div>
      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    upcomingLaunches: state.upcomingLaunches,
    hasErrored: state.upcomingLaunchesHasErrored,
    isLoading: state.upcomingLaunchesIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(upcomingLaunchesFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingLaunches)
