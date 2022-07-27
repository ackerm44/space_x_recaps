import React from 'react';
import { Link } from 'react-router-dom'
import Falcon_rocket_family from'../images/Falcon_rocket_family.svg.png'
import DateFormat from './DateFormat'

const Launch = props => {

  const patch_image_display = () => {
    if (props.launch.links.patch.small === null) {
      return <img src={Falcon_rocket_family} alt="Falcon_rocket_family" height="100" />
    } else {
      return <img src={props.launch.links.patch.small} alt={props.launch.flight_number} height="100" />
    }
  }

  return (
    <div>
      <h2><Link to={`/past/${props.launch.flight_number}`}>Flight Number: {props.launch.flight_number}</Link></h2>
      <h3>Launch Date: <DateFormat date={props.launch.date_utc} /></h3>
      {patch_image_display()}
      <p>{props.launch.rocket_name}</p>
      <p>{props.launch.launchpad_name}</p>
      {/* <a href={props.launch.video_link} target="_blank">Video</a> */}
    </div>
  )
}


export default Launch
