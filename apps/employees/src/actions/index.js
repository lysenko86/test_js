import * as authActions from './auth-actions';
import * as employeeActions from './employee-actions';

const { authLogin } = authActions;
const { getAllEmployees } = employeeActions;

export {
	authLogin,
	getAllEmployees
}
