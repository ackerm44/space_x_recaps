import React from 'react'
import CommentNew from '../containers/CommentNew'
import CommentShow from './CommentShow'
import DateFormat from './DateFormat'

const LaunchShowDetail = props => {
  const launch_success = () => {
    if (props.launch.launch_success === false) {
      return <h3>Launch failed</h3>
    } else {
      return <h3>Launch was successful</h3>
    }
  }

  if (props.launch !== undefined) {
    return (
      <div className="launchShow">
        <div className="launchDetail">
          <h2>Flight Number: {props.launch.flight_number}</h2>
          <h3><DateFormat date={props.launch.launch_date}/></h3>
          <img src={props.launch.patch_image} alt="patch_image" height="200"/>
          {launch_success()}
          <p>Details: {props.launch.details}</p>
          <h5>Rocket: {props.launch.rocket_name}</h5>
          <h5>Launchpad: {props.launch.launchpad_name}</h5>
          <p><a href={props.launch.article_link} target="_blank">More Information</a></p>
          <a href={props.launch.video_link} target="_blank">Video of Launch</a>
        </div>
        <div className="launchComments">
          <h2>Comments on this Launch</h2>
          <div>
            <CommentNew launch={props.launch}/>
          </div>
          <div>
            {props.comments.map(comment => <CommentShow comment={comment} />)}
          </div>
        </div>
      </div>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default LaunchShowDetail
