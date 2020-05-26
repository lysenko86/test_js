import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/spinner';
import { fetchEmployees } from '../../actions';

class Table extends Component {
	componentDidMount() {
		const page = 1;
		const countOnPage = 4;
		this.props.fetchEmployees(page, countOnPage);
		// загружає начаьне, потрібно вивести таблицю і пагінацію переклацування
		// потім пошук
		// потім модалки
		// перевірити як заміняється по ключа employees state - items и заміняється по ключам?
	}

	render() {
		const { isLoading } = this.props;

		// if (!Object.keys(employees).length) {
		// 	Database have not employess
		// }

		return isLoading ? <Spinner /> : (
			<div>
				EMPLOYEES PAGE
			</div>
		)
	}
};

const mapStateToProps = ({ employees }) => ({
	isLoading: employees.isLoading
});

const mapDispatchToProps = {
	fetchEmployees
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
