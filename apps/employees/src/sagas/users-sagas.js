import { takeEvery, put, call } from 'redux-saga/effects';

import firebaseService from '../services/firebase-service';
import {
	USERS__FETCH_USER, USERS__FETCH_USER_REQUEST, USERS__FETCH_USER_SUCCESS, USERS__FETCH_USER_FAILURE,
	USERS__RESET_USER, USERS__RESET_USER_SUCCESS
} from '../actions/types';
import { resetUser } from '../actions';
import { showAlert } from '../actions';

function fetchUser(token) {
	console.log('getUserFetch TOKEN is', token);
	firebaseService.usersGet(token);
}

function* fetchUserWorker() {
	const token = yield localStorage.getItem('token');
	if (!token) {
		yield put(resetUser());
	} else {
		yield put({ type: USERS__FETCH_USER_REQUEST });
		try {
			const data = yield call(fetchUser, token);
			yield put({
				type: USERS__FETCH_USER_SUCCESS,
				payload: data
			});
		} catch(err) {
			yield put({ type: USERS__FETCH_USER_FAILURE });
			yield put(showAlert(err));
		}
	}
}

function* resetUserWorker() {
	yield localStorage.removeItem('token');
	yield put({ type: USERS__RESET_USER_SUCCESS });
}

export default [
	takeEvery(USERS__FETCH_USER, fetchUserWorker),
	takeEvery(USERS__RESET_USER, resetUserWorker)
];
