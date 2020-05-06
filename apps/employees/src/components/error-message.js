import React from 'react';
import '../css/error-message.css';

const ErrorMessage = ({ message }) => {
	return (
		<div className="error-msg">
			<div className="alert alert-danger error-msg__body">
				<span className="error-msg__title">ERROR!</span>
				<span className="error-msg__text">Something went wrong, we are fixing it right now!</span>
				<div className="error-details"><strong>Details:</strong> {message}</div>
			</div>
		</div>
	);
}

export default ErrorMessage;
