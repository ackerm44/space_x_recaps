import commentsApi from '../api/commentsApi'

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
      // .catch(() => dispatch(commentsHasErrored(true)))
  }
}

export function commentsHasErrored(bool) {
  return {
    type: 'COMMENTS_HAS_ERRORED',
    hasErrored: bool
  }
}

export function commentsIsLoading(bool) {
  return {
    type: 'COMMENTS_IS_LOADING',
    isLoading: bool
  }
}

export function commentsFetchDataSuccess(comments) {
  return {
    type: 'COMMENTS_FETCH_DATA_SUCCESS',
    comments
  }
}

export function postCommentData(comment) {
  return function(dispatch) {
    return commentsApi.postComment(comment).then(response => {
      dispatch(postCommentSuccess(comment))
    }).catch(error => {throw(error)})
  }
}

export function postCommentSuccess(comment) {
  return {
    type: 'POST_COMMENT_SUCCESS',
    comment
  }
}