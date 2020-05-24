import * as alertsActions from './alerts-actions';
import * as usersActions from './users-actions';
//import * as modalActions from './modal-actions';
//import * as employeesActions from './employees-actions';

const { showAlert, hideAlert } = alertsActions;
const { fetchUser, resetUser } = usersActions;
//const { modalShow, modalHide } = modalActions;
//const { employeesChangeCurrentPage, employeesFetch, employeesGet, employeesGetClear,
//	employeesAdd, employeesEdit, employeesRemove } = employeesActions;

export {
	showAlert, hideAlert,
	fetchUser, resetUser
	//modalShow, modalHide,
	//employeesChangeCurrentPage, employeesFetch, employeesGet, employeesGetClear,
	//	employeesAdd, employeesEdit, employeesRemove,
}
