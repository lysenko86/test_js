import { takeEvery, put, call } from 'redux-saga/effects';

import firebaseService from '../services/firebase-service';
import {
	EMPLOYEES__FETCH_EMPLOYEES,
	EMPLOYEES__FETCH_EMPLOYEES_REQUEST, EMPLOYEES__FETCH_EMPLOYEES_SUCCESS, EMPLOYEES__FETCH_EMPLOYEES_FAILURE
} from '../actions/types';
import { showAlert } from '../actions';



function fetchEmployees({ page, countOnPage }) {
	return firebaseService.employeesFetch(page, countOnPage);
}

function* fetchEmployeesWorker({ payload }) {
	yield put({ type: EMPLOYEES__FETCH_EMPLOYEES_REQUEST });
	try {
		const data = yield call(fetchEmployees, payload);
		yield put({
			type: EMPLOYEES__FETCH_EMPLOYEES_SUCCESS,
			payload: data
		});
	} catch(err) {
		yield put({ type: EMPLOYEES__FETCH_EMPLOYEES_FAILURE });
		yield put(showAlert(err));
	}
};



export default [
	takeEvery(EMPLOYEES__FETCH_EMPLOYEES, fetchEmployeesWorker)
];
