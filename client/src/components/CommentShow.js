import React from 'react'
import DateFormat from './DateFormat'

const CommentShow = props => {
  return (
    <div>
      <DateFormat date={props.comment.created_at} />
      <p>{props.comment.user_id}</p>
      <p>{props.comment.comment_body}</p>
    </div>
  )

}

export default CommentShow
