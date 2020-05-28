import React from 'react';
import { parse } from 'query-string';

import Table from '../containers/table';

const EmployeesPage = ({ location, match }) => {
	const employeeId = match.params.id;
	const currentPage = Number(parse(location.search).page) || 1;
	const url = location.pathname;

	return (
		<div className="employees-page">
			<Table url={url} employeeId={employeeId} currentPage={currentPage} />
		</div>
	)
};

export default EmployeesPage;
