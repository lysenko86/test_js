import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { stringify } from 'query-string';

const Pagination = ({ url, countPages, currentPage }) => {
	const pages = new Array(countPages).fill(0).map((_, i) => i + 1);

	const prevBtnClasses = classNames({
		'page-item': true,
		'disabled': currentPage === 1
	});
	const nextBtnClasses = classNames({
		'page-item': true,
		'disabled': currentPage === countPages
	});

	const prevPageUrl = url + '?' + stringify({
		page: currentPage > 1 ? currentPage - 1 : currentPage
	});
	const nextPageUrl = url + '?' + stringify({
		page: currentPage < countPages ? currentPage + 1 : currentPage
	});

	return countPages <= 1 ? null : (
		<nav>
			<ul className="pagination justify-content-center">
				<li className={prevBtnClasses}>
					<Link className="page-link" to={prevPageUrl}><span>&laquo;</span></Link>
				</li>
				{ pages.map((page, index) => {
					const btnClasses = classNames({
						'page-item': true,
						'active': page === currentPage
					});
					const pageUrl = url + '?' + stringify({ page });
					return (
						<li className={btnClasses} key={index}>
							<Link className="page-link" to={pageUrl}>{page}</Link>
						</li>
					)
				} ) }
				<li className={nextBtnClasses}>
					<Link className="page-link" to={nextPageUrl}><span>&raquo;</span></Link>
				</li>
			</ul>
		</nav>
	);
}

export default Pagination;
