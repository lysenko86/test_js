import React from 'react';

import TableRow from './table-row';


// const employeesGet = () => {};
// const modalRemoveShow = () => {};


const Cells = ({ items }) => (
	<table className="table table-hover">
		<thead className="thead-dark">
			<tr>
				<th>empID</th>
				<th>empName</th>
				<th>empActive</th>
				<th>empDepartment</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{ items.map((employee, index) => (
				<tr key={index}><TableRow
					employee={employee}
				/></tr>
			) ) }
		</tbody>
	</table>
);

export default Cells;
