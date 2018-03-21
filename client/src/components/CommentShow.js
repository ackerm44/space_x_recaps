import React from 'react'
import DateFormat from './DateFormat'

const CommentShow = props => {
  return (
    <div>
      <h4><DateFormat date={props.comment.created_at} /> - {props.comment.user.username}</h4>
      <p>{props.comment.comment_body}</p>
      <hr />
    </div>
  )

}

export default CommentShow
