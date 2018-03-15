import { combineReducers } from 'redux';
import { latestLaunch, latestLaunchHasErrored, latestLaunchIsLoading } from './latestLaunch';


export default combineReducers({
  latestLaunch,
  latestLaunchHasErrored,
  latestLaunchIsLoading
})
