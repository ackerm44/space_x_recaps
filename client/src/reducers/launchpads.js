export function launchpadsHasErrored(state = false, action) {
  switch (action.type) {
    case 'LAUNCHPADS_HAS_ERRORED':
      return action.hasErrored
    default:
      return state;
  }
}

export function launchpadsIsLoading(state = false, action) {
  switch (action.type) {
    case 'LAUNCHPADS_IS_LOADING':
      return action.isLoading
    default:
      return state;
  }
}

export function launchpads(state = [], action) {
  switch (action.type) {
    case 'LAUNCHPADS_FETCH_DATA_SUCCESS':
      return action.launchpads
    default:
      return state;
  }
}
