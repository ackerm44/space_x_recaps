import { combineReducers } from 'redux';
import { latestLaunch, latestLaunchHasErrored, latestLaunchIsLoading } from './latestLaunch';
import { pastLaunches, pastLaunchesHasErrored, pastLaunchesIsLoading } from './pastLaunches';


export default combineReducers({
  latestLaunch,
  latestLaunchHasErrored,
  latestLaunchIsLoading,
  pastLaunches,
  pastLaunchesHasErrored,
  pastLaunchesIsLoading
})
