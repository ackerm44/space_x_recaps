import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Header = props => {
  const log_in_or_out = () => {
    if (props.logged_in) {
      return <p id="log_in_or_out" ><a href="/logout" onClick={props.logOut}>Log Out</a></p>
    } else {
      return <p id="log_in_or_out"><a href="/login">Log In</a></p>
    }
  }
  
  // const activePath = () => {
  //   const match = matchPath("/users/123", {
  //     path: "/upcoming",
  //     exact: true,
  //     strict: false,
  //   });
  // }

  return (
    <header>
      <div className="titlebar">
        <div className="site-title">
          <h1 className="drop-shadow"><Link className="text-decoration-none" to='/'>SpaceXrecapS</Link></h1>
        </div>
        {/* <div>
          {log_in_or_out()}
        </div> */}
      </div>
      <hr />
      <nav className="navlinks">
        {/* {activePath()} */}
        <NavLink className="hover-underline-animation" activeClassName="is-active" to="/upcoming" exact >Upcoming Launches</NavLink>
        <NavLink className="hover-underline-animation" activeClassName="is-active" to="/past" exact >Past Launches</NavLink>
        <NavLink className="hover-underline-animation" activeClassName="is-active" to="/rockets" exact >Rockets</NavLink>
        <NavLink className="hover-underline-animation" activeClassName="is-active" to="/launchpads" exact  >Launchpads</NavLink>
        <NavLink className="hover-underline-animation" activeClassName="is-active" to="/cores" exact  >Cores</NavLink>
        <NavLink className="hover-underline-animation" activeClassName="is-active" to="/stats" exact  >Stats</NavLink>
      </nav>
    </header>
  )
}

export default Header
