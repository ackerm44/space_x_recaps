import { combineReducers } from 'redux';
import { latestLaunch, latestLaunchHasErrored, latestLaunchIsLoading } from './latestLaunch';
import { pastLaunches, pastLaunchesHasErrored, pastLaunchesIsLoading } from './pastLaunches';
import { upcomingLaunches, upcomingLaunchesHasErrored, upcomingLaunchesIsLoading } from './upcomingLaunches';
import { rockets, rocketsIsLoading, rocketsHasErrored } from './rockets'
import { launchpads, launchpadsIsLoading, launchpadsHasErrored } from './launchpads'
import { news, newsIsLoading, newsHasErrored} from './news'
import { session, loginHasErrored } from './sessionReducer'
import { comments, commentsIsLoading, commentsHasErrored } from './commentsReducers'


export default combineReducers({
  latestLaunch,latestLaunchHasErrored, latestLaunchIsLoading,
  pastLaunches, pastLaunchesHasErrored, pastLaunchesIsLoading,
  upcomingLaunches, upcomingLaunchesHasErrored, upcomingLaunchesIsLoading,
  rockets, rocketsHasErrored, rocketsIsLoading,
  launchpads, launchpadsHasErrored, launchpadsIsLoading,
  news, newsHasErrored, newsIsLoading,
  session, loginHasErrored,
  comments, commentsHasErrored, commentsIsLoading
})
