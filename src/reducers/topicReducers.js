import { ADD_TOPIC } from '../actions/types';

const initialState = {
	topic: {},
	topics: [],
	msg: '',
	success: true
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ADD_TOPIC:
			return {
				...state,
				topics: action.payload,
				msg: 'New Topic Added',
				success: true
			};
		default:
			return state;
	}
}