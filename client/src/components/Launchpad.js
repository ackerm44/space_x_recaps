import React from 'react'
import '../css/launchpads.css'

const Launchpad = props => (
  <div className="launchpadCard">
    <div className='launchpadInfo'>
      <h2>{props.launchpad.full_name}</h2>
      <p>{props.launchpad.locality}, {props.launchpad.region}</p>
      <p>Status: {props.launchpad.status.toUpperCase()}</p>
      <p>{props.launchpad.details}</p>
    </div>
    <div className="launchpadImage">
      <a href={props.launchpad.images.large} target="_blank">
        <img src={props.launchpad.images.large} alt="launchpad" width="350"/>
      </a>
    </div>
  </div>
)


export default Launchpad
