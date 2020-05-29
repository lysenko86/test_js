import React from 'react';
import { connect } from 'react-redux';

import TableRow from './table-row';
import EmployeeRemove from './employee-remove';
import EmployeeView from './employee-view';
import {
	showModal, hideModal,
	removeEmployee
} from '../../actions';




 const employeesGet = () => {};





const Cells = ({ items, history, showModal, hideModal, removeEmployee }) => {
	const removeEmployeeHandle = (id) => {
		removeEmployee(id);
		hideModal();
	}
	const removeHandle = employee => {
		showModal({
			title: 'Remove employee',
			component: <EmployeeRemove
				employee={employee}
				onClose={hideModal}
				onRemove={() => removeEmployeeHandle(employee.id)}
			/>
		});
	};

	const closeViewEmployeeHandle = () => {
		history.push(`/employees${history.location.search || ''}`);
		hideModal();
	};
	const viewHandle = employee => {
		const { pathname, search } = history.location;
		history.push(`${pathname}/${employee.id}${search || ''}`);
		showModal({
			title: 'View employee',
			component: <EmployeeView
				employee={employee}
				onClose={closeViewEmployeeHandle}
			/>,
			onClose: closeViewEmployeeHandle
		});
	};

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
				{ items.map((employee, index) => (
					<tr key={index}><TableRow
						employee={employee}
						viewHandle={() => viewHandle(employee)}
						onEmployeeEdit={(id) => employeesGet(id, 'edit')}
						removeHandle={() => removeHandle(employee)}
					/></tr>
				) ) }
			</tbody>
		</table>
	)
};

const mapDispatchToProps = {
	showModal,
	hideModal,
	removeEmployee
};

export default connect(null, mapDispatchToProps)(Cells);
