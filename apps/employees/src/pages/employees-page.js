import React from 'react';

import Table from '../containers/table';

const EmployeesPage = (/*{ history, match }*/) => {
	//const employeeId = match.params.id;
	const employeeId = '';
	const history = '';
	return (
		<div className="employees-page">
			<Table employeeId={employeeId} history={history} />
		</div>
	)
};

export default EmployeesPage;
