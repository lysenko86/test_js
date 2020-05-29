import {
	EMPLOYEES__FETCH_EMPLOYEES_REQUEST, EMPLOYEES__FETCH_EMPLOYEES_SUCCESS, EMPLOYEES__FETCH_EMPLOYEES_FAILURE,
	EMPLOYEES__FILTER_EMPLOYEE,
	EMPLOYEES__REMOVE_EMPLOYEE_REQUEST, EMPLOYEES__REMOVE_EMPLOYEE_SUCCESS, EMPLOYEES__REMOVE_EMPLOYEE_FAILURE,
	EMPLOYEES__GET_EMPLOYEE_REQUEST, EMPLOYEES__GET_EMPLOYEE_SUCCESS, EMPLOYEES__GET_EMPLOYEE_FAILURE, EMPLOYEES__GET_EMPLOYEE_CLEAR
} from '../actions/types';
import { removeItemById } from '../utils';

const initialState = {
	items: {},
	countItems: 0,
	isLoading: false,
	countOnPage: 4,
	searchValue: '',
	isLoadingEmployee: false,
	employee: null
}

const employeesReducer = (state=initialState, { type, payload }) => {
	switch (type) {

		case EMPLOYEES__FETCH_EMPLOYEES_REQUEST: return {
			...state,
			isLoading: true
		};

		case EMPLOYEES__FETCH_EMPLOYEES_SUCCESS: return {
			...state,
			isLoading: false,
			searchValue: '',
			countItems: payload.countItems,
			items: payload.items
		};

		case EMPLOYEES__FETCH_EMPLOYEES_FAILURE: return {
			...state,
			isLoading: false
		};

		case EMPLOYEES__FILTER_EMPLOYEE: return {
			...state,
			searchValue: payload
		};

		case EMPLOYEES__REMOVE_EMPLOYEE_REQUEST: return {
			...state,
			isLoading: true
		};

		case EMPLOYEES__REMOVE_EMPLOYEE_SUCCESS: return {
			...state,
			isLoading: false,
			searchValue: '',
			countItems: state.countItems - 1,
			items: removeItemById(state.items, payload)
		};

		case EMPLOYEES__REMOVE_EMPLOYEE_FAILURE: return {
			...state,
			isLoading: false
		};

		case EMPLOYEES__GET_EMPLOYEE_REQUEST: return {
			...state,
			isLoadingEmployee: true
		};

		case EMPLOYEES__GET_EMPLOYEE_SUCCESS: return {
			...state,
			isLoadingEmployee: false,
			employee: payload
		};

		case EMPLOYEES__GET_EMPLOYEE_CLEAR: return {
			...state,
			employee: null
		};

		case EMPLOYEES__GET_EMPLOYEE_FAILURE: return {
			...state,
			isLoadingEmployee: false
		};

		default: return state;

	}
}

export default employeesReducer;





/*
import {
	EMPLOYEES_ADD_REQUEST, EMPLOYEES_ADD_SUCCESS, EMPLOYEES_ADD_FAILURE,
	EMPLOYEES_EDIT_REQUEST, EMPLOYEES_EDIT_SUCCESS, EMPLOYEES_EDIT_FAILURE,
} from '../actions/types';

const getNewItems = (items, employee) => {
	if (typeof employee === 'string') {
		const indexOfItem = items.findIndex(item => item.id === employee);
		return [
			...items.slice(0, indexOfItem),
			...items.slice(indexOfItem + 1)
		];
	} else if (typeof employee === 'object') {
		const indexOfItem = items.findIndex(item => item.id === employee.id);
		return [
			...items.slice(0, indexOfItem),
			employee,
			...items.slice(indexOfItem + 1)
		];
	}
};

		case EMPLOYEES_ADD_REQUEST:
			return {
				...state,
				isLoading: true,
				error: null
			};

		case EMPLOYEES_ADD_SUCCESS:
			return {
				...state,
				items: [...state.items, action.payload],
				isLoading: false
			};

		case EMPLOYEES_ADD_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		case EMPLOYEES_EDIT_REQUEST:
			return {
				...state,
				isLoading: true,
				error: null
			};

		case EMPLOYEES_EDIT_SUCCESS:
			return {
				...state,
				items: getNewItems(state.items, action.payload),
				isLoading: false
			};

		case EMPLOYEES_EDIT_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};
*/
