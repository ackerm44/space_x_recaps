import sessionApi from '../api/sessionApi';
import createUserApi from '../api/createUserApi'
import { postCommentHasErrored } from './commentsActions'

export function logInUser(credentials) {
  return (dispatch) => {
    return sessionApi.login(credentials).then(response => {
      if (response.jwt) {
        sessionStorage.setItem('jwt', response.jwt);
        dispatch(loginSuccess());
        dispatch(loginHasErrored(false))
        dispatch(postCommentHasErrored(false))
      } else {
        dispatch(loginHasErrored(true))
      }
    })
  }
};

export function loginSuccess() {
  return {
    type: 'LOG_IN_SUCCESS'}
}

export function loginHasErrored(bool) {
  return {
    type: 'LOG_IN_HAS_ERRORED',
    hasErrored: bool
  }
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {type: 'LOG_OUT'}
}



export function SignUpUser(credentials) {
  return (dispatch) => {
    return createUserApi.signup(credentials).then(response => {
      if (response.jwt) {
        sessionStorage.setItem('jwt', response.jwt);
        dispatch(loginSuccess());
        dispatch(loginHasErrored(false))
        dispatch(postCommentHasErrored(false))
      } else {
        dispatch(loginHasErrored(true))
      }
    });
  };
}
