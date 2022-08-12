import React, { Component } from 'react'
import CoreCard from '../components/CoreCard'
// import { connect } from 'react-redux'
// import { upcomingLaunchesFetchData } from '../actions/upcomingLaunches'
// import {rocketsFetchData} from '../actions/rockets'
// import Launch from '../components/Launch'
import '../css/App.css'


class Cores extends Component {
    state = {
        cores: []
    }

    async componentDidMount() {
        const response = await fetch('https://api.spacexdata.com/v4/cores')
        const data = await response.json()
        this.setState({ ...this.state, cores: data })
    }
    render() {
        // if (this.props.hasErrored) {
        //   return <p>Sorry! There was an error loading the latest Launch</p>;
        // }

        if (this.state.cores.lenghth === 0) {
            return <p>Loading…</p>;
        }

        return (
            <div>
                <h1 className="title">Cores</h1>
                <article className="launchesIndex">
                    {this.state.cores.map((core, i) =>
                        <CoreCard key={i} core={core} />
                    )}
                </article>
            </div>
        )
    }
}



// const mapStateToProps = state => {
//   return {
//     // upcomingLaunches: state.upcomingLaunches,
//     upcomingLaunches: state.upcomingLaunches.filter(launch => launch.date_unix > (new Date().getTime() / 1000)),
//     hasErrored: state.upcomingLaunchesHasErrored,
//     isLoading: state.upcomingLaunchesIsLoading,
//     // rockets: state.rockets
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData: (url) => dispatch(upcomingLaunchesFetchData(url)),
//     // fetchRockets: (rocketUrl) => dispatch(rocketsFetchData(rocketUrl))
//   }
// }

export default Cores
