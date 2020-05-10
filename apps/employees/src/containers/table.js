import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {
	alertShow,
	modalShow, modalHide,
	employeesChangeCurrentPage, employeesFetch, employeesGet, employeesGetClear,
		employeesAdd, employeesEdit, employeesRemove
} from '../actions';
import Spinner from '../components/spinner';
import ErrorMessage from '../components/error-message';
import Pagination from '../components/pagination';
import TableRow from '../components/table-row';
import EmployeeForm from '../components/employee-form';
import EmployeeView from '../components/employee-view';
import EmployeeRemove from '../components/employee-remove';

class Table extends Component {
	componentDidMount() {
		this.props.employeesFetch();
		const { employeeId } = this.props;
		if (employeeId) {
			this.props.employeesGet(employeeId, 'view');
		}
	}

	componentDidUpdate() {
		const { employee } = this.props;
		if (employee && employee.action === 'view') {
			this.props.history.push(this.props.employee.id);
			const modalObj = {
				title: 'View employee',
				component: <EmployeeView employee={this.props.employee} />,
				afterClose: () => {
					this.props.employeesGetClear();
					this.props.history.replace('/employees/');
				}
			};
			this.props.modalShow(modalObj);
		} else if (employee && employee.action === 'edit') {
			const modalObj = {
				title: 'Edit employee',
				btnCloseTitle: '',
				component: <EmployeeForm
					employee={this.props.employee}
					onSubmit={this.onEmployeeEdit}
					onClose={this.props.modalHide}
				/>,
				afterClose: this.props.employeesGetClear()
			};
			this.props.modalShow(modalObj);
		}
	}

	onEmployeeAdd = employee => {
		this.props.employeesAdd(employee, () =>
			this.props.alertShow('success', 'Employee was added successfully.'));
		this.props.modalHide();
	}

	onEmployeeEdit = employee => {
		this.props.employeesEdit(employee, () =>
			this.props.alertShow('success', 'Employee was edited successfully.'));
		this.props.modalHide();
	}

	onEmployeeRemove = id => {
		this.props.employeesRemove(id, () =>
			this.props.alertShow('success', 'Employee was removed successfully.'));
		this.props.modalHide();
	}

	render() {
		const { isLoading, error, employees, currentPage, changePage, modalShow,
			modalHide, employeesGet } = this.props;

		const itemsOnPage = 5;
		const itemsCount = employees.length;
		const indexStart = (currentPage - 1) * itemsOnPage;
		const indexEnd = currentPage * itemsOnPage;
		const items = employees.slice(indexStart, indexEnd);

		const pagesObj = { itemsOnPage, itemsCount, currentPage, changePage };

		const modalObj = {
			title: 'Add new employee',
			btnCloseTitle: '',
			component: <EmployeeForm onSubmit={this.onEmployeeAdd} onClose={modalHide} />
		};

		const modalRemoveShow = (id) => {
			modalShow({
				title: 'Remove employee',
				btnCloseTitle: '',
				component: <EmployeeRemove onRemove={() => this.onEmployeeRemove(id)} onClose={modalHide} />
			});
		};

		return isLoading ? <Spinner /> : (error ? <ErrorMessage message={error} /> : (
			<Fragment>
				<button className="btn btn-primary" onClick={() => modalShow(modalObj)}>Add new employee</button>
				<Pagination pagesObj={pagesObj} />
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
								onEmployeeView={(id) => employeesGet(id, 'view')}
								onEmployeeEdit={(id) => employeesGet(id, 'edit')}
								onEmployeeRemove={(id) => modalRemoveShow(id)}
							/></tr>
						) ) }
					</tbody>
				</table>
				<Pagination pagesObj={pagesObj} />
			</Fragment>
		));
	};
};

const mapStateToProps = state => ({
	employees: state.employees.items,
	currentPage: state.employees.currentPage,
	isLoading: state.employees.isLoading,
	error: state.employees.error,
	employee: state.employees.employee
});

const mapDispatchToProps = dispatch => ({
	changePage: page => dispatch(employeesChangeCurrentPage(page)),
	employeesFetch: () => dispatch(employeesFetch()),
	employeesGet: (id, action) => dispatch(employeesGet(id, action)),
	employeesGetClear: () => dispatch(employeesGetClear()),
	employeesAdd: (employee, cbAlert) => dispatch(employeesAdd(employee, cbAlert)),
	employeesEdit: (employee, cbAlert) => dispatch(employeesEdit(employee, cbAlert)),
	employeesRemove: (id, cbAlert) => dispatch(employeesRemove(id, cbAlert)),

	alertShow: (type, text) => dispatch(alertShow(type, text)),
	modalShow: component => dispatch(modalShow(component)),
	modalHide: () => dispatch(modalHide())
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
