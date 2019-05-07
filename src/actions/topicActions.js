import { ADD_TOPIC, GET_TOPIC} from './types';

export const addTopic = (data) => (dispatch) => {
	const topics = sessionStorage.getItem('topics') === null ? [] : JSON.parse(sessionStorage.getItem('topics'));
	let addTopics = [ ...topics, data ];
	sessionStorage.setItem('topics', JSON.stringify(addTopics));
	dispatch({
		type: ADD_TOPIC,
		payload: addTopics
	});
};

export const getTopic = () => (dispatch) => {
	const topics = sessionStorage.getItem('topics') === null ? [] : JSON.parse(sessionStorage.getItem('topics'));
	dispatch({
		type: GET_TOPIC,
		payload: topics
	});
};
