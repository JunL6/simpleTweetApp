import { combineReducers } from 'redux';
import tweetsReducer from './reducer_tweets';

const rootReducer = combineReducers({
  tweets: tweetsReducer
});

export default rootReducer;
