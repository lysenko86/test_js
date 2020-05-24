import {
	USERS__FETCH_USER_REQUEST, USERS__FETCH_USER_SUCCESS, USERS__FETCH_USER_FAILURE,
	USERS__RESET_USER_SUCCESS
} from '../actions/types';

const initialState = {
	isLoggedIn: false,
	isLoading: false,
	data: null
}

const usersReducer = (state=initialState, { type, payload }) => {
	switch (type) {

		case USERS__FETCH_USER_REQUEST: return {
			...state,
			isLoading: true
		};

		case USERS__FETCH_USER_SUCCESS: return {
			...state,
			isLoggedIn: true,
			isLoading: false,
			data: payload.user
		};

		case USERS__FETCH_USER_FAILURE: return {
			...state,
			isLoggedIn: false,
			isLoading: true,
			data: null
		};

		case USERS__RESET_USER_SUCCESS: return {
			...state,
			isLoggedIn: false,
			data: null
		};

		default: return state;

	}
}

export default usersReducer;
