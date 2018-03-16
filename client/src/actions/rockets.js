export function rocketsFetchData(url) {
  return (dispatch) => {
    dispatch(rocketsIsLoading(true));

    fetch(url)
      .then((reponse) => {
        dispatch(rocketsIsLoading(false));

        return reponse;
      })
      .then(response => response.json())
      .then(rockets => dispatch(rocketsFetchDataSuccess(rockets)))
      .catch(() => dispatch(rocketsHasErrored(true)))
  }
}

export function rocketsHasErrored(bool) {
  return {
    type: 'ROCKETS_HAS_ERRORED',
    hasErrored: bool
  }
}


export function rocketsIsLoading(bool) {
  return {
    type: 'ROCKETS_IS_LOADING',
    isLoading: bool
  };
}

export function rocketsFetchDataSuccess(rockets) {
  return {
    type: 'ROCKETS_FETCH_DATA_SUCCESS',
    rockets
  }
}
