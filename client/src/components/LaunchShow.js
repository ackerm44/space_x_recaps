import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pastLaunchesFetchData } from '../actions/pastLaunches'

class LaunchShow extends Component {
  componentDidMount() {
    this.props.fetchData('/api/past')
  }

  render() {
    return (
      <div>
        <h2>Yes</h2>
        <h2>{this.props.launch.id }</h2>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  const launch = state.pastLaunches.find(launch => launch.id === ownProps.match.params.movieId )
  debugger;
  if (launch) {
    return { launch }
  } else {
    return { launch: {} }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(pastLaunchesFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchShow)
