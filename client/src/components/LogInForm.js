import React from 'react'
import { Link } from 'react-router-dom'
import TextInput from './TextInput'

const LogInForm = props => {
  const error = () => {
    if (props.hasErrored === true) {
      return <p>Incorrect Username or Password</p>
    }
  }

  return (
    <form>
      {error()}
      <TextInput
        name="username"
        label="username"
        value={props.value.email}
        onChange={props.onChange}
      />
      <TextInput
        name="password"
        label="password"
        type="password"
        value={props.value.password}
        onChange={props.onChange}
      />
      <input
        type="submit"
        onClick={props.onSubmit}
      />
      <p><Link to={'/signup'}>Or Sign Up</Link></p>
    </form>
  )
}

export default LogInForm
