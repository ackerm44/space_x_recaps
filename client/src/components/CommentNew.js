import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postCommentData } from '../actions/commentsActions'
import TextInput from './TextInput'


class CommentNew extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   comment: {
    //     launch_id: this.props.launch,
    //     comment_body: []
    //
    //   }
    // }
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }


  onChange(event) {
    this.setState({
      comment: {
        launch_id: this.props.launch,
        comment_body: event.target.value,
      }
    })
  }

  onSave(event) {
    event.preventDefault();

    this.props.postComment(this.state.comment)
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
    postComment: (comment) => dispatch(postCommentData(comment))
  }
}

export default connect(null, mapDispatchToProps)(CommentNew)
