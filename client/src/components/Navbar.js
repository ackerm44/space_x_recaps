import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/App.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>SpaceXrecapS</h1>
      <hr />
      <NavLink to="/" exact >Home</NavLink>
      <NavLink to="/upcoming" exact >Upcoming Launches</NavLink>
      <NavLink to="/past" exact >Past Launches</NavLink>
      <NavLink to="/rockets" exact >Rockets</NavLink>
      <NavLink to="/launchpads" exact >Launchpads</NavLink>
      <NavLink to="/news" exact >News</NavLink>
    </div>
  )

}

export default Navbar
