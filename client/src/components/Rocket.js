import React from 'react'
import '../css/rockets.css'
// import falcon_1 from '../images/falcon_1.jpg'

const Rocket = props => (
  <div className="rocketCard">
    <div className="rocketInfo">
      <h2>{props.rocket.name}</h2>
      <p>{props.rocket.description}</p>
      <ul>
        <li>Height: {props.rocket.height.feet} feet</li>
        <li>Diameter: {props.rocket.diameter.feet} feet</li>
        <li>Mass: {props.rocket.mass.lb} lbs</li>
        <li>Number of Engines: {props.rocket.engines.number}</li>
        <li>Engine Type: {props.rocket.engines.type}</li>
        <li>Cost Per Launch: ${props.rocket.cost_per_launch.toLocaleString()}</li>
      </ul>
    </div>
    <div className="rocketImage">
      <img src={props.rocket.flickr_images[0]} alt={props.rocket.name} height="300px"/>
    </div>
  </div>
)

export default Rocket
