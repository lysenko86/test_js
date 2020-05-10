import * as alertActions from './alert-actions';
import * as modalActions from './modal-actions';
import * as employeesActions from './employees-actions';
import * as authActions from './auth-actions';

const { alertShow, alertHide } = alertActions;
const { modalShow, modalHide } = modalActions;
const { employeesChangeCurrentPage, employeesFetch, employeesGet, employeesGetClear,
	employeesAdd, employeesEdit, employeesRemove } = employeesActions;
const { authLogin } = authActions;

export {
	alertShow, alertHide,
	modalShow, modalHide,
	employeesChangeCurrentPage, employeesFetch, employeesGet, employeesGetClear,
		employeesAdd, employeesEdit, employeesRemove,
	authLogin
}
