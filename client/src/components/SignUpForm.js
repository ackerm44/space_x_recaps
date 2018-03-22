import React from 'react'
import TextInput from './TextInput'
import { Link } from 'react-router-dom'

const SignUpForm = (props) => {

  const error = () => {
    if (props.hasErrored === true) {
      return <p>All fields must be completed</p>
    }
  }

  return (
    <form>
      {error()}
      <TextInput
        name="username"
        label="username"
        value={props.value.username}
        onChange={props.onChange}
      />
      <TextInput
        name="email"
        label="email"
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
      <TextInput
        name="password_confirmation"
        label="password confirmation"
        type="password"
        value={props.value.password_confirmation}
        onChange={props.onChange}
      />
      <input
        type="submit"
        onClick={props.onSubmit}
      />
      <p><Link to={'/login'}>Or Log In</Link></p>
    </form>
  )
}

export default SignUpForm
