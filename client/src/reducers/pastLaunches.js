export function pastLaunchesHasErrored(state = false, action) {
  switch (action.type) {
    case 'PAST_LAUNCHES_HAS_ERRORED':
      return action.hasErrored
    default:
      return state;
  }
}

export function pastLaunchesIsLoading(state = false, action) {
  switch (action.type) {
    case 'PAST_LAUNCHES_IS_LOADING':
      return action.isLoading
    default:
      return state;
  }
}

export function pastLaunches(state = [], action ) {
  switch(action.type) {
    case 'PAST_LAUNCHES_FETCH_DATA_SUCCESS':
      return action.pastLaunches
    default:
      return state; 
  }
}
