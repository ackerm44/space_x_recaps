export function launchHasErrored(state = false, action) {
    switch (action.type) {
      case 'LAUNCH_HAS_ERRORED':
        return action.hasErrored;
      default:
        return state;
    }
  }
  
  export function launchIsLoading(state = false, action) {
    switch (action.type) {
      case 'LAUNCH_IS_LOADING':
        return action.isLoading;
      default:
        return state;
    }
  }
  
  export function launch(state = {}, action) {
    switch (action.type) {
      case 'LAUNCH_FETCH_DATA_SUCCESS':
        return action.launch;
      default:
        return state;
    }
  }
  