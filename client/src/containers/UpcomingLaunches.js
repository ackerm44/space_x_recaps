import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upcomingLaunchesFetchData } from '../actions/upcomingLaunches'
import Launch from '../components/Launch'
import '../css/launchIndex.css'

class UpcomingLaunches extends Component {
  componentDidMount() {
    this.props.fetchData('/api/upcoming')
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
          {this.props.upcomingLaunches.map((launch, id) =>
            <div>
              <Launch launch={launch} />
            </div>
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
