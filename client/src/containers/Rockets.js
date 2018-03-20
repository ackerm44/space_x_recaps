import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rocketsFetchData } from '../actions/rockets';
import Rocket from '../components/Rocket'


class Rockets extends Component {
  componentDidMount() {
    const headers = {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
    const request = new Request('/api/rockets', {
      method: 'GET',
      headers: headers
    })

    this.props.fetchData(request)
  }

  render() {
    return (
      <div>
        <h1 className="title">Rockets</h1>
        <div>
          {this.props.rockets.map(rocket => <Rocket rocket={rocket} />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    rockets: state.rockets,
    hasErrored: state.rocketsHasErrored,
    isLoading: state.rocketsIsLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(rocketsFetchData(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Rockets)
