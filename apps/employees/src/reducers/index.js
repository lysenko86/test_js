import { combineReducers } from 'redux';

import alertReducer from './alert-reducer';
import modalReducer from './modal-reducer';
import authReducer from './auth-reducer';
import employeesReducer from './employees-reducer';

const rootReducer = combineReducers({
	alert: alertReducer,
	modal: modalReducer,
	auth: authReducer,
	employees: employeesReducer
});

export default rootReducer;
