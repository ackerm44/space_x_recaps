import React, { Component } from 'react'
import { connect } from 'react-redux'
import { launchFetchData } from '../actions/launchById'
import { rocketsFetchData } from '../actions/rockets'
import { launchpadsFetchData } from '../actions/launchpads'
import '../css/launchShow.css'
import LaunchShowDetail from '../components/LaunchShowDetail'


class LaunchShow extends Component {
  componentDidMount() {
    this.props.fetchLaunch(`https://api.spacexdata.com/v4/launches/${this.props.match.params.launchId}`);
    this.props.fetchRockets('https://api.spacexdata.com/v4/rockets/');
    this.props.fetchLaunchPads('https://api.spacexdata.com/v4/launchpads/');
  
  }

  render() {
    return (
      <article>
        <LaunchShowDetail launch={this.props.launch} rocket={this.props.rocket} launchpad={this.props.launchpad}/>
      </article>
    )
  }
}

const determineRocket = (state) => {
  return state.rockets.find(rocket => rocket.id === state.launch.rocket)
}

const determineLaunchpad = (state) => {
  return state.launchpads.find(launchpad => launchpad.id === state.launch.launchpad)

}

const mapStateToProps = state => {
  return {
    launch: state.launch,
    rocket: determineRocket(state),
    launchpad: determineLaunchpad(state),
    hasErrored: state.launchHasErrored,
    isLoading: state.launchIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLaunch: (url) => dispatch(launchFetchData(url)),
    fetchRockets: (url) => dispatch(rocketsFetchData(url)),
    fetchLaunchPads: (url) => dispatch(launchpadsFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchShow)
