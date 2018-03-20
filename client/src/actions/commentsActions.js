export function commentsFetchData(url) {
  return (dispatch) => {
    dispatch(commentsIsLoading(true));

    fetch(url)
      .then((response) => {
        dispatch(commentsIsLoading(false));

        return response
      })
      .then(response => response.json())
      .then(comments => dispatch(commentsFetchDataSuccess(comments)))
      .catch(() => dispatch(commentsHasErrored(true)))
  }
}

export function commentsHasErrored(bool) {
  return {
    type: 'PAST_LAUNCHES_HAS_ERRORED',
    hasErrored: bool
  }
}

export function commentsIsLoading(bool) {
  return {
    type: 'PAST_LAUNCHES_IS_LOADING',
    isLoading: bool
  }
}

export function commentsFetchDataSuccess(comments) {
  return {
    type: 'PAST_LAUNCHES_FETCH_DATA_SUCCESS',
    comments
  }
}
