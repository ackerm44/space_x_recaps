import React, { Component } from 'react'
import { connect } from 'react-redux'
import { upcomingLaunchesFetchData } from '../actions/upcomingLaunches'
import UpcomingLaunchCard from '../components/UpcomingLaunchCard'
import '../css/launchIndex.css'


class UpcomingLaunches extends Component {
  // static requestHeaders() {
  //   return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  // }

  componentDidMount() {
    const headers = {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
    const request = new Request('/api/upcoming', {
      method: 'GET',
      headers: headers
    })

    this.props.fetchData(request)
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
              <UpcomingLaunchCard launch={launch} />
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
