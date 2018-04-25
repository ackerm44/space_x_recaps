import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = props => {
  const log_in_or_out = () => {
    if (props.logged_in) {
      return <p id="log_in_or_out" ><a href="/logout" onClick={props.logOut}>Log Out</a></p>
    } else {
      return <p id="log_in_or_out"><a href="/login">Log In</a></p>
    }
  }


  return (
    <div>
      <div className="titlebar">
        <div className="site-title">
          <h1>SpaceXrecapS</h1>
        </div>
        <div>
          {log_in_or_out()}
        </div>
      </div>
      <div className="navlinks">
        <hr />
        <NavLink to="/" exact >Home</NavLink>
        <NavLink to="/upcoming" exact >Upcoming Launches</NavLink>
        <NavLink to="/past" exact >Past Launches</NavLink>
        <NavLink to="/rockets" exact >Rockets</NavLink>
        <NavLink to="/launchpads" exact >Launchpads</NavLink>
      </div>
    </div>
  )
}

export default Header
