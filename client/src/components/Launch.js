import React from 'react';

const Launch = props => {
  let launchDate = new Date(props.launch.launch_date);
  let monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  let day = launchDate.getDate();
  let month = launchDate.getMonth();
  let year = launchDate.getFullYear();


  return (
    <div>
      <h2>Launch Date: {monthNames[month]} {day}, {year}</h2>
      <img src={props.launch.patch_image} height="100" />
      <p>{props.launch.rocket_name}</p>
      <p>{props.launch.launchpad_name}</p>
      <a href={props.launch.video_link} target="_blank">Video</a>
    </div>
  )
}

export default Launch
