export function launchpadsFetchData(url) {
  return (dispatch) => {
    dispatch(launchpadsIsLoading(true));

    fetch(url)
      .then((response) => {
        dispatch(launchpadsIsLoading(false));

        return response;
      })
      .then(response => response.json())
      .then(launchpads => dispatch(launchpadsFetchDataSuccess(launchpads)))
      .catch(() => dispatch(launchpadsHasErrored(true)))
  }
}

export function launchpadsHasErrored(bool) {
  return {
    type: 'LAUNCHPADS_HAS_ERRORED',
    hasErrored: bool
  }
}

export function launchpadsIsLoading(bool) {
  return {
    type: 'LAUNCHPADS_IS_LOADING',
    isLoading: bool
  }
}

export function launchpadsFetchDataSuccess(launchpads) {
  return {
    type: 'LAUNCHPADS_FETCH_DATA_SUCCESS',
    launchpads
  }
}
