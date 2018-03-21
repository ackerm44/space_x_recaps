import InitialState from './initialState'

export function commentsHasErrored(state = false, action) {
  switch (action.type) {
    case 'COMMENTS_HAS_ERRORED':
      return action.hasErrored
    default:
      return state;
  }
}

export function commentsIsLoading(state = false, action) {
  switch (action.type) {
    case 'COMMENTS_IS_LOADING':
      return action.isLoading
    default:
      return state;
  }
}

export function comments(state = [], action) {
  switch (action.type) {
    case 'COMMENTS_FETCH_DATA_SUCCESS':
      return action.comments
    case 'POST_COMMENT_SUCCESS':
      // debugger;
      return [].concat(state, action.comment)
    default:
      return state;
  }
}

// export function postCommentSuccess(state = [], action) {
//   switch (action.type) {
//     case 'POST_COMMENT_SUCCESS':
//     debugger;
//       return state.concat(action.comment)
//     default:
//       return state;
//   }
// }

export function postCommentHasErrored(state = false, action) {
  switch (action.type) {
    case 'POST_COMMENT_HAS_ERRORED':
      return action.hasErrored
    default:
      return state;
  }
}
