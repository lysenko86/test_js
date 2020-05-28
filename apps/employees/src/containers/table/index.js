import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Cells from './cells';
import Pagination from './pagination';
import SearchForm from './search-form';
import Spinner from '../../components/spinner';
import { fetchEmployees } from '../../actions';

class Table extends Component {
	componentDidMount() {
		this.props.fetchEmployees(this.props.currentPage);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.currentPage !== this.props.currentPage) {
			this.props.fetchEmployees(this.props.currentPage);
		}
	}

	objToArr(employees) {
		const keys = Object.keys(employees);
		return keys.map(key => ({
			id: key,
			...employees[key]
		}));
	}

	render() {
		const { employees, countItems, countOnPage, url, currentPage } = this.props;
		const items = this.objToArr(employees);
		const countPages = Math.ceil(countItems / countOnPage);

		const noEmployees = items.length ? null : (
			<h3 className="pt-5 text-center">The database have not employees yet</h3>
		);

		const table = noEmployees ? null : (
			<div className="employees-page__table">
				<Pagination url={url} countPages={countPages} currentPage={currentPage} />
				<Cells items={items}/>
				<Pagination url={url} countPages={countPages} currentPage={currentPage} />
			</div>
		);

		return this.props.isLoading ? <Spinner /> : (
			<Fragment>
				<div className="employees-page__top-bar">
					<button className="btn btn-primary" onClick={() => {}}>Add new employee</button>
					<SearchForm />
				</div>
				{ noEmployees || table }
			</Fragment>
		)
	}
};

const mapStateToProps = ({ employees }) => ({
	isLoading: employees.isLoading,
	employees: employees.items,
	countItems: employees.countItems,
	countOnPage: employees.countOnPage
});

const mapDispatchToProps = {
	fetchEmployees
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);














// потім пошук
// потім модалки
// перевірити як заміняється по ключа employees state - items и заміняється по ключам?








/*

import {
	alertShow,
	modalShow, modalHide,
	employeesGet, employeesGetClear, employeesAdd, employeesEdit, employeesRemove
} from '../actions';
import ErrorMessage from '../components/error-message';
import EmployeeForm from '../components/employee-form';
import EmployeeView from '../components/employee-view';
import EmployeeRemove from '../components/employee-remove';
import Modal from '../components/modal';

class Table extends Component {
	componentDidMount() {
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

		return true;
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
	employeesFetch: employeesFetch(dispatch),
	employeesGet: employeesGet(dispatch),
	employeesGetClear: () => dispatch(employeesGetClear()),
	employeesAdd: employeesAdd(dispatch),
	employeesEdit: employeesEdit(dispatch),
	employeesRemove: employeesRemove(dispatch),

	alertShow: (type, text) => dispatch(alertShow(type, text)),
	modalShow: component => dispatch(modalShow(component)),
	modalHide: () => dispatch(modalHide())
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

*/
