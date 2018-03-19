import initialState from './initialState';

export default function session(state = initialState.session, action) {
  switch(action.type) {
    case 'LOG_IN_SUCCESS':
      return !!sessionStorage.jwt
    default:
      return state;
  }
}
