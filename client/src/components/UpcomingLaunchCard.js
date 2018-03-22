import React from 'react';
import Moment from 'react-moment';
import DateFormat from './DateFormat'

const UpcomingLaunchCard = props => (
  <div>
    <h2>Flight Number: {props.launch.launch.id}</h2>
    <h3>Launch Date: <DateFormat date={props.launch.launch.launch_date} /></h3>
    <h3><Moment format="hh:mm:ss a ( UTC  Z)" >{props.launch.launch.launch_date}</Moment></h3>
    <p>{props.launch.launch.rocket_name}</p>
    <p>{props.launch.launch.launchpad_name}</p>
  </div>
)


export default UpcomingLaunchCard
