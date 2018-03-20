import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {connect} from 'react-redux';
import '../css/App.css'
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions';


class Navbar extends Component {
  constructor(props) {
    super();
    this.HandleLogOut = this.handleLogOut.bind(this);
  }



  handleLogOut = (e) => {
    e.preventDefault();
    this.props.actions.logOutUser();
    // this.props.router.push('/')
  }

  render() {
    const log_in_or_out = () => {
      // debugger;
      if (this.props.logged_in) {
        return <p id="log_in_or_out"><a href="/logout" onClick={this.handleLogOut}>Log Out</a></p>
      } else {
        return <NavLink to="/login" exact>Log In</NavLink>
      }
    }



    return (
      <div className="navbar">
        <h1>SpaceXrecapS</h1>
        <hr />
        {log_in_or_out()}
        <NavLink to="/" exact >Home</NavLink>
        <NavLink to="/upcoming" exact >Upcoming Launches</NavLink>
        <NavLink to="/past" exact >Past Launches</NavLink>
        <NavLink to="/rockets" exact >Rockets</NavLink>
        <NavLink to="/launchpads" exact >Launchpads</NavLink>
        <NavLink to="/news" exact >News</NavLink>

      </div>
    )
  }


}

const mapStateToProps = state => {
  return {
    logged_in: state.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
