export function rocketsHasErrored(state = false, action) {
  switch (action.type) {
    case 'ROCKETS_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function rocketsIsLoading(state = false, action) {
  switch (action.type) {
    case 'ROCKETS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function rockets(state = [], action) {
  switch (action.type) {
    case 'ROCKETS_FETCH_DATA_SUCCESS':
      return action.rockets
    default:
      return state;
  }
}
