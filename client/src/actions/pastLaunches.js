export function pastLaunchesFetchData(url) {
  return (dispatch) => {
    dispatch(pastLaunchesIsLoading(true));

    fetch(url)
      .then((response) => {
        dispatch(pastLaunchesIsLoading(false));

        return response
      })
      .then(response => response.json())
      .then(pastLaunches => dispatch(pastLaunchesFetchDataSuccess(pastLaunches)))
      .catch(() => dispatch(pastLaunchesHasErrored(true)))
  }
}

export function pastLaunchesHasErrored(bool) {
  return {
    type: 'PAST_LAUNCHES_HAS_ERRORED',
    hasErrored: bool
  }
}

export function pastLaunchesIsLoading(bool) {
  return {
    type: 'PAST_LAUNCHES_IS_LOADING',
    isLoading: bool
  }
}

export function pastLaunchesFetchDataSuccess(pastLaunches) {
  return {
    type: 'PAST_LAUNCHES_FETCH_DATA_SUCCESS',
    pastLaunches
  }
}
