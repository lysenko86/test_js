import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthPage from '../pages/auth-page';
import EmployeesPage from '../pages/employees-page';
import { showAlert } from '../actions';

const Routes = ({ showAlert }) => (
	<Switch>
		<Route path='/' exact component={AuthPage} />
		<Route path='/employees/:params?' component={EmployeesPage} />
		<Route render={({ location }) => {
			showAlert(`"${location.pathname}" - is unknown URL address.`, 'danger');
		}} />
	</Switch>
);

const mapDispatchToProps = {
	showAlert
};

export default connect(null, mapDispatchToProps)(Routes);
