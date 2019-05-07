import { ADD_TOPIC, GET_TOPIC, UPVOTE_TOPIC, DOWNVOTE_TOPIC} from '../actions/types';

const initialState = {
	topic: {},
	topics: [],
	msg: '',
	success: true
};

export default function(state = initialState, action) {
	switch (action.type) {
    case GET_TOPIC:
			return {
				...state,
				topics: action.payload
			};
    case ADD_TOPIC:
			return {
				...state,
				topics: action.payload,
				msg: 'New Topic Added',
				success: true
      };
    case UPVOTE_TOPIC:
			return {
				...state,
				topics: action.payload,
				msg: 'Upvoted !',
				success: true
			};
		case DOWNVOTE_TOPIC:
			return {
				...state,
				topics: action.payload,
				msg: 'Downvoted!',
				success: false
			};
		default:
			return state;
	}
}