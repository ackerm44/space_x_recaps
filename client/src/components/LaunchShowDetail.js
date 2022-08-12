import React from 'react'
// import CommentNew from '../containers/CommentNew'
// import CommentShow from './CommentShow'
import {DateFormat, TimeFormat} from './DateFormat'

const LaunchShowDetail = props => {
  const launch_success = () => {
    if (props.launch.success === false) {
      return <span className="fail">LAUNCH FAILED</span>
    } else {
      return <span className="success">LAUNCH WAS SUCCESSFUL</span>
    }
  }

  const reusedCores = () => {
    return props.launch.cores.some(core => core.reused === true)
  }

  // const readyToDisplay = () => {
  //   if (props.launch !== undefined && props.rocket !== undefined && props.launchpad !== undefined) 
  // }

  if (props.launch !== undefined && props.rocket !== undefined && props.launchpad !== undefined) {
    return (
      <div className="launchShow">
        <div className="text-center">
          <h2>Flight Name: {props.launch.name}</h2>
          <h3>Flight Number: {props.launch.flight_number}</h3>

        </div>
        <div className="launchDetail">
          <div>
            <table>
              <tbody>
                <tr>
                  <td className="tableLabel">Launch Date </td>
                  <td><DateFormat date={props.launch.date_utc} /></td>
                </tr>
                <tr>
                  <td className="tableLabel">Launch Time (Local) </td>
                  <td><TimeFormat date={props.launch.date_local} /></td>
                </tr>
                {props.launch.upcoming === false &&
                  <tr>
                    <td className="tableLabel">Status </td>
                    <td>{launch_success()}</td>
                  </tr>

                }
                {props.launch.details !== null &&
                  <tr>
                    <td className="tableLabel">Details </td>
                    <td>{props.launch.details}</td>
                  </tr>
                }
                <tr>
                  <td className="tableLabel">Rocket </td>
                  <td>{props.rocket.name}</td>
                </tr>
                <tr>
                  <td className="tableLabel">Launchpad </td>
                  <td>{props.launchpad.full_name}</td>
                </tr>
                <tr>
                  <td className="tableLabel">Reused Cores </td>
                  <td>{reusedCores() ? 'True' : 'False'}</td>
                </tr>
              </tbody>
            </table>
            {/* <h3>Launch Date: <DateFormat date={props.launch.date_utc} /></h3> */}
            {/* {props.launch.upcoming === false && launch_success()} */}
            {/* {props.launch.details !== null && <p>Details: {props.launch.details}</p>} */}
            {/* <h3>Rocket: {props.rocket.name}</h3>
            <h3>Launchpad: {props.launchpad.full_name}</h3> */}

          </div>
          <div>
            <img src={props.launch.links.patch.small} alt="patch_image" height="200" />

            <h3>Links</h3>
            {props.launch.links.article !== null && <a className="button" href={props.launch.links.article} target="_blank">More Information</a>}
            {props.launch.links.webcast && <a className="button" href={props.launch.links.webcast} target="_blank">Video of Launch</a>}
            {props.launch.links.reddit.launch !== null && <a className="button" href={props.launch.links.reddit.launch} target="_blank">Reddit Discussion</a>}

          </div>
        </div>
        {/* <div className="launchComments">
          <h2>Comments on this Launch</h2>
          <div>
            <CommentNew launch={props.launch}/>
          </div>
          <div>
            {props.comments.map(comment => <CommentShow comment={comment} />)}
          </div>
        </div> */}
      </div>
    )
  } else {
    return <p>Loading...</p>
  }
}

export default LaunchShowDetail
