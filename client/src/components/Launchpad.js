import React from 'react'
import '../css/launchpads.css'

const Launchpad = props => (
  <div className="launchpadCard">
    <div className='launchpadInfo'>
      <h2>{props.launchpad.launchpad.name}</h2>
      <p>{props.launchpad.launchpad.location_name}, {props.launchpad.location_region}</p>
      <p>{props.launchpad.launchpad.status}</p>
      <p>{props.launchpad.launchpad.details}</p>
    </div>
    <div className="launchpadImage">
      <a href={props.launchpad.launchpad.image} target="_blank">
        <img src={props.launchpad.launchpad.image} alt="launchpad" width="350"/>
      </a>
    </div>
  </div>
)


export default Launchpad
