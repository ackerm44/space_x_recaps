import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux';
import '../css/App.css'
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions';
import TeslaSpaceman from'../images/tesla_spaceman.jpg'



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
      if (this.props.logged_in) {
        return <a id="log_in_or_out" href="/logout" onClick={this.handleLogOut}>Log Out</a>
      } else {
        return <p id="log_in_or_out"><a href="/login">Log In</a></p>
      }
    }

    return (
      <div>
        <div className="titlebar">
          {/*}<div className="site-logo">
            <img src={TeslaSpaceman} alt="Tesla Spaceman" height="100px"/>
          </div>
          */}
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
          <NavLink to="/news" exact >News</NavLink>
        </div>
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
