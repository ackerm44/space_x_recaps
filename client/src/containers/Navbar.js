import React, { Component } from 'react'
import {connect} from 'react-redux';
import '../css/App.css'
import {bindActionCreators} from 'redux';
import * as sessionActions from '../actions/sessionActions';
import Header from '../components/Header'

class Navbar extends Component {
  handleLogOut = (e) => {
    e.preventDefault();
    this.props.actions.logOutUser();
  }

  render() {
    return (
      <div>
        <Header logged_in={this.props.logged_in} logOut={this.handleLogOut} />
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
