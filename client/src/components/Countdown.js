import React, { Component } from 'react'

class Countdown extends Component {
  state = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.liftoff), 1000)
  }

  getTimeUntil(liftoff) {
    const time = Date.parse(liftoff) - Date.parse(new Date())

    if (time < 0) {
      this.setState({
        seconds: 0,
        minutes: 0,
        hours: 0,
        days: 0
      })
    } else {
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor((time/(1000*60*60))%24);
        const days = Math.floor(time/(1000*60*60*24));
        this.setState({
          seconds, minutes, hours, days
      })
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.days} D - {this.state.hours} H - {this.state.minutes} M - {this.state.seconds} S</h1>
      </div>
    )
  }
}

export default Countdown
