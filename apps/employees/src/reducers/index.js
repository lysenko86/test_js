import { combineReducers } from 'redux';

import alertsReducer from './alerts-reducer';
import usersReducer from './users-reducer';
//import modalReducer from './modal-reducer';
//import employeesReducer from './employees-reducer';

const rootReducer = combineReducers({
	alert: alertsReducer,
	user: usersReducer,
	//modal: modalReducer,
	//employees: employeesReducer
});

export default rootReducer;
