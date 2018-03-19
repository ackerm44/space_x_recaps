import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux';
import '../css/App.css'

const Navbar = (props) => {
  const log_in_or_out = () => {
    // debugger;
    if (props.logged_in) {
      return <NavLink to="/logout" exact>Log Out</NavLink>
    } else {
      return <NavLink to="/login" exact>Log In</NavLink>
    }
  }


  return (
    <div className="navbar">
      <h1>SpaceXrecapS</h1>
      {log_in_or_out()}
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

const mapStateToProps = state => {
  return {
    logged_in: state.session
  }
}

export default connect(mapStateToProps)(Navbar)
