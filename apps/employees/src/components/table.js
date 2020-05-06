import React from 'react';
import TableRow from './table-row';
import '../css/table.css';


const Table = () => {
	const employees = [
		{ id: 1, name: 'Lisa', active: true, department: 'HR' },
		{ id: 2, name: 'Erik', active: true, department: 'Tech' },
		{ id: 3, name: 'Don', active: true, department: 'Finance' },
		{ id: 4, name: 'Peter', active: false, department: 'Tech' }
	];

	return (
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
				{ employees.map((employee, index) => (
					<tr key={index}><TableRow employee={employee} /></tr>
				) ) }
			</tbody>
		</table>
	);
}

export default Table;
