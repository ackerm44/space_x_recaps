import React, { Component } from 'react'
import { connect } from 'react-redux'
import Launch from '../components/Launch'
import { pastLaunchesFetchData } from '../actions/pastLaunches'
import '../css/launchIndex.css'


class PastLaunches extends Component {
  componentDidMount() {
    const headers = {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
    const request = new Request('/api/past', {
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
