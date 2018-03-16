import React from 'react'
import '../css/launchpads.css'

const Launchpad = props => {
  return (
    <div class="launchpadCard">
      <h2>{props.launchpad.name}</h2>
      <p>{props.launchpad.location_name}, {props.launchpad.location_region}</p>
      <p>{props.launchpad.status}</p>
      <p>{props.launchpad.details}</p>
    </div>
  )
}

export default Launchpad
