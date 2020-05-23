import { takeEvery, all, put } from 'redux-saga/effects';

function* getUser() {
	yield takeEvery('', getUserWorker);
}

function* getUserWorker() {
	try {
		yield 'GOOD';
		//put
	} catch(err) {
		//put
		yield 'BAD';
	}
}

export default function* usersSagas() {
	yield all([

	]);
};
