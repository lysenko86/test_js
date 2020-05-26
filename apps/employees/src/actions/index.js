import * as alertsActions from './alerts-actions';
import * as usersActions from './users-actions';
import * as employeesActions from './employees-actions';
//import * as modalActions from './modal-actions';

const { showAlert, hideAlert } = alertsActions;
const { fetchUser, logoutUser, loginUser } = usersActions;
const { fetchEmployees/*employeesChangeCurrentPage, employeesFetch, employeesGet, employeesGetClear,
	employeesAdd, employeesEdit, employeesRemove*/ } = employeesActions;
//const { modalShow, modalHide } = modalActions;

export {
	showAlert, hideAlert,
	fetchUser, logoutUser, loginUser,
	fetchEmployees
	//employeesChangeCurrentPage, employeesGet, employeesGetClear,
	//	employeesAdd, employeesEdit, employeesRemove,
	//modalShow, modalHide
}
