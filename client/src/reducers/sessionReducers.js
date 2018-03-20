import initialState from './initialState';

export function session(state = initialState.session, action) {
  switch(action.type) {
    case 'LOG_IN_SUCCESS':
      return !!sessionStorage.jwt
    case 'LOG_OUT':
      // debugger;
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
