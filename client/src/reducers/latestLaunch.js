export function latestLaunchHasErrored(state = false, action) {
  switch (action.type) {
    case 'LATEST_LAUNCH_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function latestLaunchIsLoading(state = false, action) {
  switch (action.type) {
    case 'LATEST_LAUNCH_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function latestLaunch(state = [], action) {
  switch (action.type) {
    case 'LATEST_LAUNCH_FETCH_DATA_SUCCESS':
      return action.launch[0];
    default:
      return state;
  }
}
