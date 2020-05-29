import {
	EMPLOYEES__FETCH_EMPLOYEES, EMPLOYEES__FILTER_EMPLOYEE,
	EMPLOYEES__REMOVE_EMPLOYEE
} from './types';

export const fetchEmployees = page => ({
	type: EMPLOYEES__FETCH_EMPLOYEES,
	payload: page
});

export const filterEmployees = searchValue => ({
	type: EMPLOYEES__FILTER_EMPLOYEE,
	payload: searchValue
});

export const removeEmployee = id => ({
	type: EMPLOYEES__REMOVE_EMPLOYEE,
	payload: id
});















/*

import {
	EMPLOYEES_GET_REQUEST, EMPLOYEES_GET_SUCCESS, EMPLOYEES_GET_FAILURE,
	EMPLOYEES_GET_CLEAR,
	EMPLOYEES_ADD_REQUEST, EMPLOYEES_ADD_SUCCESS, EMPLOYEES_ADD_FAILURE,
	EMPLOYEES_EDIT_REQUEST, EMPLOYEES_EDIT_SUCCESS, EMPLOYEES_EDIT_FAILURE,
} from './types';

export const employeesGet = dispatch => async (id, action) => {
	const getErrorObj = payload => ({ type: EMPLOYEES_GET_FAILURE, payload });
	dispatch({ type: EMPLOYEES_GET_REQUEST });
	try {
		const { data } = await firebaseService.employeesGet(id);
		if (data !== null) {
			dispatch({
				type: EMPLOYEES_GET_SUCCESS,
				payload: { ...data, id, action }
			});
		} else {
			dispatch(getErrorObj('Employee was not found.'));
		}
	} catch({ message }) {
		dispatch(getErrorObj(message));
	}
};

export const employeesGetClear = () => ({ type: EMPLOYEES_GET_CLEAR });

export const employeesAdd = dispatch => async (employee, cbAlert) => {
	dispatch({ type: EMPLOYEES_ADD_REQUEST });
	try {
		const { data } = await firebaseService.employeesAdd(employee);
		dispatch({
			type: EMPLOYEES_ADD_SUCCESS,
			payload: { ...employee, id: data.name }
		});
		if (typeof cbAlert === 'function') {
			cbAlert();
		}
	} catch({ message }) {
		dispatch({
			type: EMPLOYEES_ADD_FAILURE,
			payload: message
		});
	}
};

export const employeesEdit = dispatch => async (employee, cbAlert) => {
	dispatch({ type: EMPLOYEES_EDIT_REQUEST });
	try {
		const { data } = await firebaseService.employeesEdit(employee);
		dispatch({
			type: EMPLOYEES_EDIT_SUCCESS,
			payload: { ...data, id: employee.id }
		});
		if (typeof cbAlert === 'function') {
			cbAlert();
		}
	} catch({ message }) {
		dispatch({
			type: EMPLOYEES_EDIT_FAILURE,
			payload: message
		});
	}
};

*/
