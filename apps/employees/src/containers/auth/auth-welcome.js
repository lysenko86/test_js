import React, { Fragment } from 'react';

const AuthWelcome = ({ username, onLogout }) => (
	<Fragment>
		<h1>Welcome on test application, dear {username}!</h1>
		<button type="button" className="btn btn-primary" onClick={onLogout}>Logout</button>
	</Fragment>
);

export default AuthWelcome;
