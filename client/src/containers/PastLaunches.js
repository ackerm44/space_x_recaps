import React, { Component } from 'react'
import { connect } from 'react-redux'
import Launch from '../components/Launch'
import { pastLaunchesFetchData } from '../actions/pastLaunches'
import '../css/launchIndex.css'
// TODO:
import { Link, Route } from 'react-router-dom'
// import LaunchShow from './LaunchShow'

class PastLaunches extends Component {
  componentDidMount() {
    this.props.fetchData('/api/past')
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
        <h1 className="title">Past Launches</h1>
        <div className="launchesIndex">
          {this.props.pastLaunches.map((launch, id) =>
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
    pastLaunches: state.pastLaunches,
    hasErrored: state.pastLaunchesHasErrored,
    isLoading: state.pastLaunchesIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(pastLaunchesFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PastLaunches)
