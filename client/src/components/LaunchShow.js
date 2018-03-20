import React, { Component } from 'react'
import { connect } from 'react-redux'
import { pastLaunchesFetchData } from '../actions/pastLaunches'
import { commentsFetchData } from '../actions/commentsActions'
import '../css/launchShow.css'
import Comment from '../containers/Comment'

class LaunchShow extends Component {
  componentDidMount() {
    this.props.fetchPastLaunches('/api/past')
    this.props.fetchComments('/api/comments')

  }

  render() {


    const date_format = () => {
      let launchDate = new Date(this.props.launch.launch_date);
      let monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"
      ];

      let day = launchDate.getDate();
      let month = launchDate.getMonth();
      let year = launchDate.getFullYear();

      return <h3>Launch Date: {monthNames[month]} {day}, {year}</h3>
    }

    const launch_success = () => {
      if (this.props.launch.launch_success === false) {
        return <h3>Launch failed</h3>
      } else {
        return <h3>Launch was successful</h3>
      }
    }

    // const comments_display = () => {
    //   if (this.props.comments) {
    //     // debugger;
    //     t
    //     // return this.props.comments.map(comment => <Comment comment={comment} />)
    //   }
    // }

    // debugger;
    return (
      <div className="launchShow">
        <div className="launchDetail">
          <h2>Flight Number: {this.props.launch.flight_number}</h2>
          {date_format()}
          <img src={this.props.launch.patch_image} alt="patch_image" height="200"/>
          {launch_success()}
          <p>Details: {this.props.launch.details}</p>
          <h5>Rocket: {this.props.launch.rocket_name}</h5>
          <h5>Launchpad: {this.props.launch.launchpad_name}</h5>
          <p><a href={this.props.launch.article_link} target="_blank">More Information</a></p>
          <a href={this.props.launch.video_link} target="_blank">Video of Launch</a>
        </div>
        <div className="Comments">
          <h2>Comments on this Flight</h2>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  let launch = state.pastLaunches.find(l => l.launch.id === parseInt(ownProps.match.params.launchId) )
  let comments = state.comments.find(c => c.comment.launch_id === parseInt(ownProps.match.params.launchId))
  // debugger;
  if (launch) {
    launch = launch.launch
    return {
      launch: launch,
      comments: comments
    }
  } else {
    return { launch: {}, comments: {} }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPastLaunches: (url) => dispatch(pastLaunchesFetchData(url)),
    fetchComments: (url) => dispatch(commentsFetchData(url))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchShow)
