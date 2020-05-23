//import { USERS__GET_USER } from '../actions/types';

const initialState = {
	isLogged: false,
	user: null
}

const usersReducer = (state=initialState, action) => {
	switch (action.type) {

		// case USERS__GET_USER:
		// 	console.log('action >>>>>', USERS__GET_USER);
		// 	return state;

		default:
			return state;

	}
}

export default usersReducer;
