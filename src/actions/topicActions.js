import { ADD_TOPIC,} from './types';

export const addTopic = (data) => (dispatch) => {
	const topics = sessionStorage.getItem('topics') === null ? [] : JSON.parse(sessionStorage.getItem('topics'));
	let addTopics = [ ...topics, data ];
	sessionStorage.setItem('topics', JSON.stringify(addTopic));
	dispatch({
		type: ADD_TOPIC,
		payload: addTopics
	});
};