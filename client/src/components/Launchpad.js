import React from 'react'
import '../css/launchpads.css'

const Launchpad = props => {
  return (
    <div className="launchpadCard">
      <div className='launchpadInfo'>
        <h2>{props.launchpad.name}</h2>
        <p>{props.launchpad.location_name}, {props.launchpad.location_region}</p>
        <p>{props.launchpad.status}</p>
        <p>{props.launchpad.details}</p>
      </div>
      <div className="launchpadImage">
        <a href={props.launchpad.image} target="_blank">
          <img src={props.launchpad.image} alt="launchpad image" width="350"/>
        </a>
      </div>
    </div>
  )
}

export default Launchpad
