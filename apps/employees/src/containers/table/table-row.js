import React, { Fragment } from 'react';

const TableRow = ({ employee/*, onEmployeeView, onEmployeeEdit, onEmployeeRemove*/ }) => {
	const { id, name, active, department } = employee;

	return (
		<Fragment>
			<td>{id}</td>
			<td>{name}</td>
			<td>{active ? 'YES' : 'NO'}</td>
			<td>{department}</td>
			<td>
				<button
					type="button"
					className="btn btn-outline-primary btn-sm"
				>View</button>
				<button
					type="button"
					className="btn btn-outline-primary btn-sm"
				>Edit</button>
				<button
					type="button"
					className="btn btn-danger btn-sm"
				>Delete</button>
			</td>
		</Fragment>
	);
}

export default TableRow;
