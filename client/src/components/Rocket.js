import React from 'react'
import '../css/rockets.css'
// import falcon_1 from '../images/falcon_1.jpg'

const Rocket = props => (
  <div className="rocketCard">
    <div className="rocketInfo">
      <h2>{props.rocket.rocket.name}</h2>
      <p>{props.rocket.rocket.description}</p>
      <ul>
        <li>Height: {props.rocket.rocket.height} feet</li>
        <li>Diameter: {props.rocket.rocket.diameter} feet</li>
        <li>Mass: {props.rocket.rocket.mass} lbs</li>
        <li>Number of Engines: {props.rocket.rocket.number_of_engines}</li>
        <li>Engine Type: {props.rocket.rocket.engine_type}</li>
        <li>Cost Per Launch: {props.rocket.rocket.cost_per_launch}</li>
      </ul>
    </div>
    <div className="rocketImage">
      <img src={props.rocket.rocket.image} alt={props.rocket.rocket.name} height="300px"/>
    </div>
  </div>
)

export default Rocket
