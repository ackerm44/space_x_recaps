export function latestLaunchFetchData(url) {
  return (dispatch) => {
    dispatch(latestLaunchIsLoading(true));

    fetch(url)
      .then((response) => {
        dispatch(latestLaunchIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then((launch) => {
        dispatch(latestLaunchFetchDataSuccess(launch))
      }
        
      )
      .catch((response) => {
        dispatch(latestLaunchHasErrored(true))}
        )
  }
}


export function latestLaunchHasErrored(bool) {
  return {
    type: 'LATEST_LAUNCH_HAS_ERRORED',
    hasErrored: bool
};
}

export function latestLaunchIsLoading(bool) {
  return {
    type: 'LATEST_LAUNCH_IS_LOADING',
    isLoading: bool
  };
}

export function latestLaunchFetchDataSuccess(launch) {
  return {
    type: 'LATEST_LAUNCH_FETCH_DATA_SUCCESS',
    launch
  };
}
