import React, { Fragment } from 'react';

const EmployeeRemove = ({ employee, onClose, onRemove }) => (
	<Fragment>
		<div className="pt-2 pb-4">Are you sure you want to remove employee "{employee.name}"?</div>
		<button className="btn btn-primary btn-sm" onClick={onRemove}>Remove</button>
		<button className="btn btn-secondary btn-sm float-right" onClick={onClose}>Cancel</button>
	</Fragment>
);

export default EmployeeRemove;
