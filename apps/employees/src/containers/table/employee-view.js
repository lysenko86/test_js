import React, { Fragment } from 'react';

const EmployeeView = ({ employee, onClose }) => {
	const { id, name, active, field1, field2, department } = employee;
	return (
		<Fragment>
			<ul className="list-group pt-2 pb-4">
				<li className="list-group-item"><strong>ID:</strong> {id}</li>
				<li className="list-group-item"><strong>Name:</strong> {name}</li>
				<li className="list-group-item"><strong>Active:</strong> {active ? 'YES' : 'NO'}</li>
				<li className="list-group-item"><strong>Field 1:</strong> {field1}</li>
				<li className="list-group-item"><strong>Field 2:</strong> {field2}</li>
				<li className="list-group-item"><strong>Department:</strong> {department}</li>
			</ul>
			<button className="btn btn-secondary btn-sm float-right" onClick={onClose}>Cancel</button>
		</Fragment>
	)
};

export default EmployeeView;
