import React from 'react';

const EmployeeView = (props) => {
	const { id, name, active, department } = props.employee;
	return (
		<ul className="list-group">
			<li className="list-group-item"><strong>ID:</strong> {id}</li>
			<li className="list-group-item"><strong>Name:</strong> {name}</li>
			<li className="list-group-item"><strong>Active:</strong> {active ? 'YES' : 'NO'}</li>
			<li className="list-group-item"><strong>Department:</strong> {department}</li>
		</ul>
	)
};

export default EmployeeView;
