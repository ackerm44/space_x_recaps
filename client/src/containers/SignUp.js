import React, { Component } from 'react';
import TextInput from '../components/TextInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import * as sessionActions from '../actions/sessionActions';

class SignUpPage extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.session === true) {
      this.props.history.push('/')
    }
  }

  constructor(props) {
    super(props);
    this.state = {credentials:
      {username: '', email: '', password: '', password_confirmation: ''}
    }
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
    this.props.actions.SignUpUser(this.state.credentials);
  }

  render() {
    const error = props => {
      if (this.props.hasErrored === true) {
        return <p>All fields must be completed</p>
      }
    }
    return (
      <div>
        <h1 className="title">Sign Up</h1>
        <form>
          {error()}
          <TextInput
            name="username"
            label="username"
            value={this.state.credentials.username}
            onChange={this.onChange}
          />
          <TextInput
            name="email"
            label="email"
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
          <TextInput
            name="password_confirmation"
            label="password confirmation"
            type="password"
            value={this.state.credentials.password_confirmation}
            onChange={this.onChange}
          />
          <input
            type="submit"
            onClick={this.onSave}
          />
          <p><Link to={'/login'}>Or Log In</Link></p>
        </form>
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
export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
