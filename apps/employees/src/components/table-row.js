import React, { Fragment } from 'react';

const TableRow = ({ employee, onEmployeeView, onEmployeeEdit, onEmployeeRemove }) => {
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
					onClick={() => onEmployeeView(id)}
				>View</button>
				<button
					type="button"
					className="btn btn-outline-primary btn-sm"
					onClick={() => onEmployeeEdit(id)}
				>Edit</button>
				<button
					type="button"
					className="btn btn-danger btn-sm"
					onClick={() => onEmployeeRemove(id)}
				>Delete</button>
			</td>
		</Fragment>
	);
}

export default TableRow;
