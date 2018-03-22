import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rocketsFetchData } from '../actions/rockets';
import Rocket from '../components/Rocket'


class Rockets extends Component {
  componentDidMount() {
    this.props.fetchData('/api/rockets')
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
        <h1 className="title">Rockets</h1>
        <div>
          {this.props.rockets.map(rocket => <Rocket key={rocket.rocket.id.toString()} rocket={rocket} />)}
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
