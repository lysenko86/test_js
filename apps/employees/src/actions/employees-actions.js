import firebaseService from '../services/firebase-service';
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
} from './types';

export const employeesChangeCurrentPage = page => ({
	type: EMPLOYEES_CHANGE_CURRENT_PAGE,
	payload: page
});

const employeesFetchRequest = () => ({
	type: EMPLOYEES_FETCH_REQUEST
});
const employeesFetchSuccess = employees => ({
	type: EMPLOYEES_FETCH_SUCCESS,
	payload: employees || []
});
const employeesFetchFailure = error => ({
	type: EMPLOYEES_FETCH_FAILURE,
	payload: error
});
export const employeesFetch = () => dispatch => {
	dispatch(employeesFetchRequest());
	const funcSuccess = employees => dispatch(employeesFetchSuccess(employees));
	const funcError = message => dispatch(employeesFetchFailure(message));
	firebaseService.employeesFetch(funcSuccess, funcError);
};

const employeesGetRequest = id => ({
	type: EMPLOYEES_GET_REQUEST,
	payload: id
});
const employeesGetSuccess = employee => ({
	type: EMPLOYEES_GET_SUCCESS,
	payload: employee
});
const employeesGetFailure = error => ({
	type: EMPLOYEES_GET_FAILURE,
	payload: error
});
export const employeesGet = (id, action) => dispatch => {
	dispatch(employeesGetRequest());
	const funcSuccess = employee => dispatch(employeesGetSuccess({ ...employee, action }));
	const funcError = message => dispatch(employeesGetFailure(message));
	firebaseService.employeesGet(funcSuccess, funcError, id);
};

export const employeesGetClear = () => ({
	type: EMPLOYEES_GET_CLEAR
});

const employeesAddRequest = employee => ({
	type: EMPLOYEES_ADD_REQUEST,
	payload: employee
});
const employeesAddSuccess = employee => ({
	type: EMPLOYEES_ADD_SUCCESS,
	payload: employee
});
const employeesAddFailure = error => ({
	type: EMPLOYEES_ADD_FAILURE,
	payload: error
});
export const employeesAdd = (employee, cbAlert) => dispatch => {
	dispatch(employeesAddRequest());
	const funcSuccess = employee => dispatch(employeesAddSuccess(employee));
	const funcError = message => dispatch(employeesAddFailure(message));
	firebaseService.employeesAdd(funcSuccess, funcError, employee, cbAlert);
};

const employeesEditRequest = employee => ({
	type: EMPLOYEES_EDIT_REQUEST,
	payload: employee
});
const employeesEditSuccess = employee => ({
	type: EMPLOYEES_EDIT_SUCCESS,
	payload: employee
});
const employeesEditFailure = error => ({
	type: EMPLOYEES_EDIT_FAILURE,
	payload: error
});
export const employeesEdit = (employee, cbAlert) => dispatch => {
	dispatch(employeesEditRequest());
	const funcSuccess = employee => dispatch(employeesEditSuccess(employee));
	const funcError = message => dispatch(employeesEditFailure(message));
	firebaseService.employeesEdit(funcSuccess, funcError, employee, cbAlert);
};

const employeesRemoveRequest = id => ({
	type: EMPLOYEES_REMOVE_REQUEST,
	payload: id
});
const employeesRemoveSuccess = id => ({
	type: EMPLOYEES_REMOVE_SUCCESS,
	payload: id
});
const employeesRemoveFailure = error => ({
	type: EMPLOYEES_REMOVE_FAILURE,
	payload: error
});
export const employeesRemove = (id, cbAlert) => dispatch => {
	dispatch(employeesRemoveRequest());
	const funcSuccess = id => dispatch(employeesRemoveSuccess(id));
	const funcError = message => dispatch(employeesRemoveFailure(message));
	firebaseService.employeesRemove(funcSuccess, funcError, id, cbAlert);
};
