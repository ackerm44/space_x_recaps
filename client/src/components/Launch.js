import React from 'react';
import { Link } from 'react-router-dom'
import Falcon_rocket_family from'../images/Falcon_rocket_family.svg.png'
import DateFormat from './DateFormat'

const Launch = props => {

  const patch_image_display = () => {
    if (props.launch.launch.patch_image === null) {
      return <img src={Falcon_rocket_family} alt="Falcon_rocket_family" height="100" />
    } else {
      return <img src={props.launch.launch.patch_image} alt={props.launch.launch.flight_number} height="100" />
    }
  }

  return (
    <div>
      <h2><Link to={`/past/${props.launch.launch.id}`}>Flight Number: {props.launch.launch.id}</Link></h2>
      <h3>Launch Date: <DateFormat date={props.launch.launch.launch_date} /></h3>
      {patch_image_display()}
      <p>{props.launch.launch.rocket_name}</p>
      <p>{props.launch.launch.launchpad_name}</p>
      <a href={props.launch.launch.video_link} target="_blank">Video</a>
    </div>
  )
}


export default Launch
