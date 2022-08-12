import React from 'react';
import { Link } from 'react-router-dom'
import Falcon_rocket_family from '../images/Falcon_rocket_family.svg.png'
import {DateFormat} from './DateFormat'

const Launch = props => {

  const patch_image_display = () => {
    if (props.launch.links.patch.small === null) {
      return <img src={Falcon_rocket_family} alt="Falcon_rocket_family" height="100" />
    } else {
      return <img src={props.launch.links.patch.small} alt={props.launch.flight_number} height="100" />
    }
  }

  const buildLink = () => {
    const type = props.launch.upcoming === true ? 'upcoming' : 'past'
    return (`/${type}/${props.launch.id}`)
  }

  return (
    <section className="launchCard">
      <Link to={buildLink()}>
        <h2>{props.launch.name}</h2>
        <h3><strong>Flight Number:</strong> {props.launch.flight_number}</h3>
        <h3>Launch Date: <DateFormat date={props.launch.date_utc} /></h3>
        {patch_image_display()}
      </Link>
    </section>
  )
}


export default Launch
