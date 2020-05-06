import { EMPLOYEE_GET_ALL } from '../actions/types';

const initialState = {
	employees: []
	//isLoading: false
	//isError: false
};

const employeeReducer = (state=initialState, action) => {
	switch (action.type) {

		case EMPLOYEE_GET_ALL:
			console.log('action >>>>>', EMPLOYEE_GET_ALL);
			return state;

		default:
			return state;

	}
}

export default employeeReducer;
