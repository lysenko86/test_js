import {
	EMPLOYEES_CHANGE_CURRENT_PAGE,

	EMPLOYEES_FETCH_REQUEST,
	EMPLOYEES_FETCH_SUCCESS,
	EMPLOYEES_FETCH_FAILURE,

	EMPLOYEES_GET_REQUEST,
	EMPLOYEES_GET_SUCCESS,
	EMPLOYEES_GET_FAILURE,
	EMPLOYEES_GET_CLEAR,

	EMPLOYEES_ADD_REQUEST,
	EMPLOYEES_ADD_SUCCESS,
	EMPLOYEES_ADD_FAILURE,

	EMPLOYEES_EDIT_REQUEST,
	EMPLOYEES_EDIT_SUCCESS,
	EMPLOYEES_EDIT_FAILURE,

	EMPLOYEES_REMOVE_REQUEST,
	EMPLOYEES_REMOVE_SUCCESS,
	EMPLOYEES_REMOVE_FAILURE
} from '../actions/types';

const initialState = {
	items: [],
	employee: null,
	currentPage: 1,
	isLoading: false,
	error: null
};

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

const employeesReducer = (state=initialState, action) => {
	switch (action.type) {

		case EMPLOYEES_CHANGE_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload
			};

		case EMPLOYEES_FETCH_REQUEST:
			return {
				...state,
				items: [],
				currentPage: 1,
				isLoading: true,
				error: null
			};

		case EMPLOYEES_FETCH_SUCCESS:
			return {
				...state,
				items: action.payload,
				isLoading: false
			};

		case EMPLOYEES_FETCH_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		case EMPLOYEES_GET_REQUEST:
			return {
				...state,
				isLoading: true,
				error: null
			};

		case EMPLOYEES_GET_SUCCESS:
			return {
				...state,
				employee: action.payload,
				isLoading: false
			};

		case EMPLOYEES_GET_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		case EMPLOYEES_GET_CLEAR:
			return {
				...state,
				employee: null
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

		case EMPLOYEES_REMOVE_REQUEST:
			return {
				...state,
				isLoading: true,
				error: null
			};

		case EMPLOYEES_REMOVE_SUCCESS:
			return {
				...state,
				items: getNewItems(state.items, action.payload),
				isLoading: false
			};

		case EMPLOYEES_REMOVE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload
			};

		default:
			return state;

	}
}

export default employeesReducer;
