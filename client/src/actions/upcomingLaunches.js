export function upcomingLaunchesFetchData(url) {
  return (dispatch) => {
    dispatch(upcomingLaunchesIsLoading(true))

    fetch(url)
      .then((response) => {
        dispatch(upcomingLaunchesIsLoading(false))

        return response;
      })
      .then(response => response.json())
      .then(upcomingLaunches => dispatch(upcomingLaunchesFetchDataSuccess(upcomingLaunches)))
      .catch(() => upcomingLaunchesHasErrored(true))

  }
}

export function upcomingLaunchesHasErrored(bool) {
  return {
    type: 'UPCOMING_LAUNCHES_HAS_ERRORED',
    hasErrored: bool
  }
}

export function upcomingLaunchesIsLoading(bool) {
  return {
    type: 'UPCOMING_LAUNCHES_IS_LOADING',
    isLoading: bool
  }
}

export function upcomingLaunchesFetchDataSuccess(upcomingLaunches) {
  return {
    type: 'UPCOMING_LAUNCHES_FETCH_DATA_SUCCESS',
    upcomingLaunches
  }
}
