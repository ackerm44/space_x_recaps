import React, { Component } from 'react'
import { useState } from 'react'
import LaunchesPerYear from '../components/graphs/launchesPerYear'
import SuccessAndFailure from '../components/graphs/SuccessAndFailure'
import TimeLine from '../components/graphs/TimeLine'

class Graphs extends Component {
    constructor() {
        super()
        // this.launchData = []
        // this.history = []
    }

    state = {
        launchData: [],
        history: []
      }

    async componentDidMount() {
        if (this.state.launchData.length === 0) {
            const response = await fetch('https://api.spacexdata.com/v4/launches')
            const data = await response.json()
            this.setState({...this.state, launchData: data})
        }
        if (this.state.history.length === 0) {
            const response = await fetch('https://api.spacexdata.com/v4/history')
            const data = await response.json()
            this.setState({...this.state, history: data})
        }
    }

    render() {
        if (this.state.launchData.length > 0) {
            return (
                <article className="graphs">
                    {this.state.launchData.length > 0 && <LaunchesPerYear launchData={this.state.launchData} />}
                    {this.state.launchData.length > 0 && <SuccessAndFailure launchData={this.state.launchData} />}
                    {this.state.history.length > 0 && <TimeLine history={this.state.history}/>}
                </article>

            )
        } else {
            return (
                <h2>Loading...</h2>
            )
        }

    }
}




export default Graphs