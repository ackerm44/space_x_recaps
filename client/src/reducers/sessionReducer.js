import initialState from './initialState';

export function session(state = initialState.session, action) {
  switch(action.type) {
    case 'LOG_IN_SUCCESS':
      return !!sessionStorage.jwt

    case 'LOG_OUT':
      return !!sessionStorage.jwt
    default:
      return state;
  }
}

export function loginHasErrored(state = false, action) {
  switch (action.type) {
    case 'LOG_IN_HAS_ERRORED':
      return action.hasErrored
    default:
      return state;
  }
}
