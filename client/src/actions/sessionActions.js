// import * as types from './actionTypes';
import sessionApi from '../api/sessionApi';
import createUserApi from '../api/createUserApi'

export function logInUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}

export function loginSuccess() {
  return {type: 'LOG_IN_SUCCESS'}
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {type: 'LOG_OUT'}
}

export function SignUpUser(credentials) {
  return function(dispatch) {
    return createUserApi.signup(credentials).then(response => {
      sessionStorage.setItem('jwt', response.jwt);
      dispatch(loginSuccess());
    }).catch(error => {
      throw(error);
    });
  };
}
