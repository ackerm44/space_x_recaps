import React, { Component } from 'react';
import TextInput from '../components/TextInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LogInForm from '../components/LogInForm'
import * as sessionActions from '../actions/sessionActions';

class LogInPage extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.session === true) {
      this.props.history.push('/')
    }
  }

  state = {
    credentials:
     {username: '', password: ''
    }
  }

  onChange = (event) => {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave = (event) => {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
  }

  render() {
    const error = props => {
      if (this.props.hasErrored === true) {
        return <p>Incorrect Username or Password</p>
      }
    }
    return (
      <div>
        <h1 className="title">Log In</h1>
        <LogInForm
          value={this.state.credentials}
          onChange={this.onChange}
          onSubmit={this.onSave}
          hasErrored={this.props.hasErrored} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    session: state.session,
    hasErrored: state.loginHasErrored
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
