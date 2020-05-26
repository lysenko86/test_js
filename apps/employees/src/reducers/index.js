import { combineReducers } from 'redux';

import alertsReducer from './alerts-reducer';
import usersReducer from './users-reducer';
import employeesReducer from './employees-reducer';
//import modalReducer from './modal-reducer';

const rootReducer = combineReducers({
	alert: alertsReducer,
	user: usersReducer,
	employees: employeesReducer,
	//modal: modalReducer
});

export default rootReducer;
