import { MODAL_SHOW, MODAL_HIDE } from '../actions/types';

const initialState = {
	isHidden: true,
	title: '',
	btnCloseTitle: 'Close',
	component: null,
	afterClose: null
};

const modalReducer = (state=initialState, action) => {
	switch (action.type) {

		case MODAL_SHOW:
			return {
				...state,
				...action.payload,
				isHidden: false
			};

		case MODAL_HIDE:
			return initialState;

		default:
			return state;

	}
}

export default modalReducer;
