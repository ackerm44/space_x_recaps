import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postCommentData } from '../actions/commentsActions'
import TextInput from './TextInput'


class CommentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        comment_body: "",
        launch_id: this.props.launch.id,
        user_id: "",
        created_at: null
      }
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }



  onChange(event) {
    this.setState({
      comment: {
        ...this.state.comment,
        comment_body: event.target.value,
      }
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.postComment(this.state.comment);
    this.setState({
      comment: {
        ...this.state.comment,
        comment_body: ""
      }
    });

  }

  render() {
    const error = props => {
      if (this.props.hasErrored === true) {
        return <p>Please login to post a comment</p>
      }
    }
    return (
      <div>
        <form>
          {error()}
          <TextInput
            name="comment_body"
            label="New Comment"
            value={this.state.comment.comment_body}
            onChange={this.onChange}
          />
          <input type="submit" onClick={this.onSubmit} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    hasErrored: state.postCommentHasErrored
  }

}

const mapDispatchToProps = dispatch => {
  return {
    postComment: (comment) => dispatch(postCommentData(comment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentNew)
