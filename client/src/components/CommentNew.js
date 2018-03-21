import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postCommentData } from '../actions/commentsActions'
import TextInput from './TextInput'


class CommentNew extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }



  onChange(event) {
    this.setState({
      comment: {
        launch_id: this.props.launchID,
        comment_body: event.target.value,
      }
    })
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.postComment(this.state.comment)
    this.setState({
      comment: {
        ...this.state.comment,
        comment_body: ""
      }
    })
  }

  render() {
    return (
      <div>
        <form>
          <TextInput
            name="comment_body"
            label="New Comment"
            onChange={this.onChange}
          />
          <input type="submit" onClick={this.onSubmit} />
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    postComment: (comment) => dispatch(postCommentData(comment))
  }
}

export default connect(null, mapDispatchToProps)(CommentNew)
