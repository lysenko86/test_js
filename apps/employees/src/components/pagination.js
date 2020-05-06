import React from 'react';

const Pagination = () => {
	const pagesCount = 5;
	const pages = new Array(pagesCount).fill(0).map((_, i) => i + 1);
	let activePage = 1;
	let disablePrevBtn = true;
	let disableNextBtn = false;

	const prevPage = () => {
		activePage--;
		getPageData();
	}

	const nextPage = () => {
		activePage++;
		getPageData();
	}

	const getPageData = (page) => {
		if (page) {
			activePage = page;
		}
		disablePrevBtn = activePage === 1;
		disableNextBtn = activePage === pagesCount;
		console.log(`ACTION - GetData on page ${activePage}`);
	}

	return (
		<nav>
			<ul className="pagination justify-content-center">
				<li className={`page-item${disablePrevBtn ? ' disabled' : ''}`}>
					<span className="page-link" onClick={prevPage}><span>&laquo;</span></span>
				</li>
				{ pages.map((page, index) => (
					<li className={`page-item${page === activePage ? ' active' : ''}`} key={index}>
						<span className="page-link" onClick={() => getPageData(page)}>{page}</span>
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
