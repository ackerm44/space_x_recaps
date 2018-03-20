import React, { Component } from 'react';
import Launchpad from '../components/Launchpad'
import { connect } from 'react-redux'
import { launchpadsFetchData } from '../actions/launchpads'

class Launchpads extends Component {
  componentDidMount() {
    // var myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'image/jpeg');
    //
    // var myInit = { method: 'GET',
    //                headers: myHeaders,
    //                mode: 'cors',
    //                cache: 'default' };
    //
    // var myRequest = new Request('flowers.jpg',myInit);
    //
    //


    const headers = new Headers()
    headers.append("HTTP_AUTHORIZATION", `Bearer ${sessionStorage.jwt}`)
    const request = new Request('/api/launchpads', {
      method: 'GET',
      headers: headers
    })

    this.props.fetchData(request)
  }

  render() {
    return (
      <div className = "launchpads">
        <h1 className="title">Launchpads</h1>
        <div>
          {this.props.launchpads.map(launchpad => <Launchpad launchpad={launchpad} />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    launchpads: state.launchpads,
    hasErrored: state.launchpadsHasErrored,
    isLoading: state.launchpadsIsLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (url) => dispatch(launchpadsFetchData(url))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Launchpads)
