import { combineReducers } from 'redux';
import { latestLaunch, latestLaunchHasErrored, latestLaunchIsLoading } from './latestLaunch';
import { pastLaunches, pastLaunchesHasErrored, pastLaunchesIsLoading } from './pastLaunches';
import { upcomingLaunches, upcomingLaunchesHasErrored, upcomingLaunchesIsLoading } from './upcomingLaunches';


export default combineReducers({
  latestLaunch,
  latestLaunchHasErrored,
  latestLaunchIsLoading,
  pastLaunches,
  pastLaunchesHasErrored,
  pastLaunchesIsLoading,
  upcomingLaunches,
  upcomingLaunchesHasErrored,
  upcomingLaunchesIsLoading

})
