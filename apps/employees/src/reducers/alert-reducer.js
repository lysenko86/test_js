import { ALERT_SHOW, ALERT_HIDE } from '../actions/types';

const initialState = { type: '', text: '' };

const alertReducer = (state=initialState, action) => {
	switch (action.type) {

		case ALERT_SHOW:
			return action.payload;

		case ALERT_HIDE:
			return initialState;

		default:
			return state;

	}
}

export default alertReducer;
