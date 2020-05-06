import React from 'react';
import '../css/spinner.css';

const Spinner = () => {
	return (
		<div className="spinner">
			<div className="spinner-grow text-primary"></div>
			<div className="spinner-grow text-primary"></div>
			<div className="spinner-grow text-primary"></div>
		</div>
	);
}

export default Spinner;
