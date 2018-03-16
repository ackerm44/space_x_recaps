export function upcomingLaunchesHasErrored(state = false, action) {
  switch (action.type) {
    case 'UPCOMING_LAUNCHES_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export function upcomingLaunchesIsLoading(state = false, action) {
  switch (action.type) {
    case 'UPCOMING_LAUNCHES_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export function upcomingLaunches(state = [], action) {
  switch (action.type) {
    case 'UPCOMING_LAUNCHES_FETCH_DATA_SUCCESS':
      return action.upcomingLaunches;
    default:
      return state;
  }
}
