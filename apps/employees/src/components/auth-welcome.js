import React, { Fragment } from 'react';

const AuthWelcome = () => {
	const userName = 'Admin';

	const onLogout = () => {
		console.log('ACTION - Logout');
	}

	return (
		<Fragment>
			<h1>Welcome on test application, dear {userName}!</h1>
			<button type="button" className="btn btn-primary" onClick={onLogout}>Logout</button>
		</Fragment>
	);
};

export default AuthWelcome;
