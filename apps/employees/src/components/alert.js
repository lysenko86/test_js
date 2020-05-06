import React from 'react';

const Alert = () => {
	const isShow = false;
	const type = 'danger';
	const text = 'You should check in on some of those fields below.';

	return !isShow ? null : (
		<div className={`alert alert-${type}`}>
			<strong>Attention!</strong>&nbsp; {text}
			<button type="button" className="close">
				<span>&times;</span>
			</button>
		</div>
	);
};

export default Alert;
