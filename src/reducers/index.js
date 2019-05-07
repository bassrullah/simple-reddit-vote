import { combineReducers } from 'redux';
import topicReducers from './topicReducers';

export default combineReducers({
	topics: topicReducers
});