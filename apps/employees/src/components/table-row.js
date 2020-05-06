import React, { Fragment } from 'react';

const TableRow = ({employee}) => {
	const {id, name, active, department} = employee;

	const onShow = (id) => {
		console.log('ACTION - GetProfile, id =', id);
	}

	const onEdit = (id) => {
		console.log('ACTION - EditProfile, id =', id);
	}

	const onRemove = (id) => {
		console.log('ACTION - RemoveProfile, id =', id);
	}

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
					onClick={() => onShow(id)}
				>View</button>
				<button
					type="button"
					className="btn btn-outline-primary btn-sm"
					onClick={() => onEdit(id)}
				>Edit</button>
				<button
					type="button"
					className="btn btn-danger btn-sm"
					onClick={() => onRemove(id)}
				>Delete</button>
			</td>
		</Fragment>
	);
}

export default TableRow;
