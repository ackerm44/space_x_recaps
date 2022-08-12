export function launchFetchData(url) {
    return (dispatch) => {
      dispatch(launchIsLoading(true))
  
      fetch(url)
        .then((response) => {
          dispatch(launchIsLoading(false))
          return response;
        })
        .then(response => response.json())
        .then((launch) => {
          dispatch(launchFetchDataSuccess(launch))
        })
        .catch(() => launchHasErrored(true))
  
    }
  }
  
  export function launchHasErrored(bool) {
    return {
      type: 'LAUNCH_HAS_ERRORED',
      hasErrored: bool
    }
  }
  
  export function launchIsLoading(bool) {
    return {
      type: 'LAUNCH_IS_LOADING',
      isLoading: bool
    }
  }
  
  export function launchFetchDataSuccess(launch) {
    return {
      type: 'LAUNCH_FETCH_DATA_SUCCESS',
      launch
    }
  }
  