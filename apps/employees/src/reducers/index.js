import { combineReducers } from 'redux';

//import alertReducer from './alert-reducer';
//import modalReducer from './modal-reducer';
import usersReducer from './users-reducer';
//import employeesReducer from './employees-reducer';

const rootReducer = combineReducers({
	//alert: alertReducer,
	//modal: modalReducer,
	users: usersReducer,
	//employees: employeesReducer
});

export default rootReducer;
