import React from 'react';
import Table from '../components/table';
import Pagination from '../components/pagination';
import Modal from '../components/modal';
import Spinner from '../components/spinner';

const EmployeesPage = () => {
	return (
		<div className="employees-page">
			<Spinner />
			<Pagination />
			<Table />
			<Pagination />
			<Modal />
		</div>
	);
}

export default EmployeesPage;
