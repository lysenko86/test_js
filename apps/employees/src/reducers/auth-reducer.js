import { AUTH_LOGIN } from '../actions/types';

const initialState = {
	isLogged: false,
	userName: ''
	//isLoading: false
	//isError: false
}

const authReducer = (state=initialState, action) => {
	switch (action.type) {

		case AUTH_LOGIN:
			console.log('action >>>>>', AUTH_LOGIN);
			return state;

		default:
			return state;

	}
}

export default authReducer;
