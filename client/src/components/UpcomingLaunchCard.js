import React from 'react';

const UpcomingLaunchCard = props => {
  let launchDate = new Date(props.launch.launch.launch_date);
  let monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  let day = launchDate.getDate();
  let month = launchDate.getMonth();
  let year = launchDate.getFullYear();

  return (
    <div>
      <h2>Flight Number: {props.launch.launch.id}</h2>
      <h3>Launch Date: {monthNames[month]} {day}, {year}</h3>
      <p>{props.launch.launch.rocket_name}</p>
      <p>{props.launch.launch.launchpad_name}</p>
    </div>
  )
}


export default UpcomingLaunchCard
