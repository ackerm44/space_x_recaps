import React from 'react'
import '../css/rockets.css'
// import falcon_1 from '../images/falcon_1.jpg'

const Rocket = props => {
  return (
    <div className="rocketCard">
      <div className="rocketInfo">
        <h2>{props.rocket.name}</h2>
        <p>{props.rocket.description}</p>
        <ul>
          <li>Height: {props.rocket.height} feet</li>
          <li>Diameter: {props.rocket.diameter} feet</li>
          <li>Mass: {props.rocket.mass} lbs</li>
          <li>Number of Engines: {props.rocket.number_of_engines}</li>
          <li>Engine Type: {props.rocket.engine_type}</li>
          <li>Cost Per Launch: {props.rocket.cost_per_launch}</li>
        </ul>
      </div>
      <div className="rocketImage">
        <img src={props.rocket.image} height="300px"/>
      </div>
    </div>
  )
}

export default Rocket
