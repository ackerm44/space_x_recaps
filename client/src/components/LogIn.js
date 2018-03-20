import React, { Component } from 'react';
import TextInput from './TextInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import * as sessionActions from '../actions/sessionActions';

class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {credentials: {username: '', password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    event.preventDefault();
    this.props.actions.logInUser(this.state.credentials);
    this.props.history.push('/')

  }

  render() {
    return (
      <div>
        <h1 className="title">Log In</h1>
        <form>
          <TextInput
            name="username"
            label="username"
            value={this.state.credentials.email}
            onChange={this.onChange}
          />
          <TextInput
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}
          />
          <input
            type="submit"
            onClick={this.onSave}
          />
          <p><Link to={'/signup'}>Or Sign Up</Link></p>
        </form>

    </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(LogInPage);
