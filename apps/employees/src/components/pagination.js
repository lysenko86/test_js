import React from 'react';

const Pagination = ({ pagesObj }) => {
	const { itemsOnPage, itemsCount, currentPage, changePage } = pagesObj;

	const pagesCount = Math.ceil(itemsCount / itemsOnPage);
	const pages = new Array(pagesCount).fill(0).map((_, i) => i + 1);
	let disablePrevBtn = currentPage === 1;
	let disableNextBtn = currentPage === pagesCount;

	const prevPage = () => currentPage > 1 ? changePage(currentPage - 1) : false;
	const nextPage = () => currentPage < pagesCount ? changePage(currentPage + 1) : false;

	return pagesCount <= 1 ? null : (
		<nav>
			<ul className="pagination justify-content-center">
				<li className={`page-item${disablePrevBtn ? ' disabled' : ''}`}>
					<span className="page-link" onClick={prevPage}><span>&laquo;</span></span>
				</li>
				{ pages.map((page, index) => (
					<li className={`page-item${page === currentPage ? ' active' : ''}`} key={index}>
						<span className="page-link" onClick={() => changePage(page)}>{page}</span>
					</li>
				) ) }
				<li className={`page-item${disableNextBtn ? ' disabled' : ''}`}>
					<span className="page-link" onClick={nextPage}><span>&raquo;</span></span>
				</li>
			</ul>
		</nav>
	);
}

export default Pagination;
