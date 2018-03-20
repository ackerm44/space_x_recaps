import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postCommentData } from '../actions/commentsActions'
import TextInput from './TextInput'


class CommentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {comments: []}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }


  onChange(event) {
    this.setState({
      comments: event.target.value
    })
  }

  onSave(event) {
    event.preventDefault();
    this.props.postComment(this.state.comments)
  }

  render() {
    return (
      <div>
        <form>
          <TextInput
            name="comment_body"
            label="Comment"
            onChange={this.onChange}
          />
          <input type="submit" onClick={this.onSave} />
        </form>
      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    postComment: (url) => dispatch(postCommentData(url))
  }
}

export default connect(null, mapDispatchToProps)(CommentNew)
