import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Falcon_rocket_family from'../images/Falcon_rocket_family.svg.png'

const Launch = props => {
  let launchDate = new Date(props.launch.launch.launch_date);
  let monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  let day = launchDate.getDate();
  let month = launchDate.getMonth();
  let year = launchDate.getFullYear();


  const patch_image_display = () => {
    if (props.launch.launch.patch_image === null) {
      return <img src={Falcon_rocket_family} height="100" />
    } else {
      return <img src={props.launch.launch.patch_image} height="100" />
    }
  }


  return (
    <div>
      <h2><Link to={`/past/${props.launch.launch.id}`}>Flight Number: {props.launch.id}</Link></h2>
      <h3>Launch Date: {monthNames[month]} {day}, {year}</h3>
      {patch_image_display()}
      <p>{props.launch.launch.rocket_name}</p>
      <p>{props.launch.launch.launchpad_name}</p>
      <a href={props.launch.launch.video_link} target="_blank">Video</a>
    </div>
  )
}


export default Launch
