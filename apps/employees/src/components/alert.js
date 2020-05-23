import React, { useState } from 'react';

const Alert = ({ type, message }) => {
	const { text, setText } = useState(message);

	return text && (
		<div className={`alert alert-${type}`}>
			<strong>Attention!</strong>&nbsp; {text}
			<button type="button" className="close" onClick={() => setText('')}>
				<span>&times;</span>
			</button>
		</div>
	);
};

export default Alert;
