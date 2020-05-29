import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Cells from './cells';
import Pagination from './pagination';
import SearchForm from './search-form';
import Spinner from '../../components/spinner';
import { showAlert, fetchEmployees, filterEmployees } from '../../actions';
import { filterItems, getCountPages } from '../../utils';

class Table extends Component {
	componentDidMount() {
		this.props.fetchEmployees(this.props.currentPage);
		if (this.props.employeeId) {
			//this.props.employeesGet(employeeId, 'view');
		}
	}

	componentDidUpdate(prevProps) {
		const { currentPage, countItems, countOnPage, fetchEmployees, showAlert } = this.props;
		if (prevProps.currentPage !== currentPage || prevProps.countItems !== countItems) {
			fetchEmployees(currentPage);
		}
		const countPages = getCountPages(countItems, countOnPage);
		if (countPages > 0 && (currentPage < 1 || currentPage > countPages)) {
			showAlert(`Page №${currentPage} - is not exists.`, 'danger');
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
		const {
			isLoading, employees, countItems, countOnPage, url, history, currentPage,
			searchValue, filterEmployees
		} = this.props;
		const items = this.objToArr(employees);
		const countPages = getCountPages(countItems, countOnPage);

		const noEmployees = items.length ? null : (
			<h3 className="pt-5 text-center">The database have not employees yet</h3>
		);

		const table = noEmployees ? null : (
			<div className="employees-page__table pt-4">
				<Pagination url={url} countPages={countPages} currentPage={currentPage} />
				<Cells items={items} history={history} />
				<Pagination url={url} countPages={countPages} currentPage={currentPage} />
			</div>
		);

		return (
			<Fragment>
				<div className="employees-page__top-bar">
					<button className="btn btn-primary" onClick={() => {}} disabled={isLoading}>Add new employee</button>
					<SearchForm
						isLoading={isLoading}
						searchValue={searchValue}
						filterEmployees={filterEmployees}
					/>
				</div>
				{ isLoading ? <Spinner /> : (noEmployees || table) }
			</Fragment>
		)
	}
};

const mapStateToProps = ({ employees }) => ({
	isLoading: employees.isLoading,
	employees: filterItems(employees.items, employees.searchValue),
	searchValue: employees.searchValue,
	countItems: employees.countItems,
	countOnPage: employees.countOnPage
});

const mapDispatchToProps = {
	showAlert,
	fetchEmployees,
	filterEmployees
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);














// потім модалки
// перевірити як заміняється по ключа employees state - items и заміняється по ключам?








/*

import {
	employeesGet, employeesGetClear, employeesAdd, employeesEdit
} from '../actions';
import EmployeeForm from '../components/employee-form';
import EmployeeView from '../components/employee-view';

class Table extends Component {
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

		return true;
	};
};

const mapStateToProps = state => ({
	employee: state.employees.employee
});

const mapDispatchToProps = dispatch => ({
	employeesGet: employeesGet(dispatch),
	employeesGetClear: () => dispatch(employeesGetClear()),
	employeesAdd: employeesAdd(dispatch),
	employeesEdit: employeesEdit(dispatch),
});

*/
