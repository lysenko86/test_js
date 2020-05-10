import React from 'react';

const AuthForm = () => {
	const onSubmit = (e) => {
		e.preventDefault();
		console.log('ACTION - Authorization');
	}
	// контрольовані input

	return (
		<div className="auth-page">
			<h1>Welcome, please authorize</h1>
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label>Enter login:</label>
					<input type="text" className="form-control" />
					<small className="form-text text-muted">The login is "Admin"</small>
				</div>
				<div className="form-group">
					<label>Enter password:</label>
					<input type="password" className="form-control" />
					<small className="form-text text-muted">The pasword is "123456"</small>
				</div>
				<button type="submit" className="btn btn-primary">Login</button>
			</form>
		</div>
	);
}

export default AuthForm;
