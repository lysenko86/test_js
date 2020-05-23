import React from 'react';

import AuthBlock from './auth-block';
import MenuItems from './menu-items';

const NavBar = () => {
	const isLoggined = false;
	const username = null;
	const onLogout = () => {};

	return (
		<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
			<div className="menu-container">
				<div className="navbar-brand">Employees</div>
				<MenuItems />
			</div>
			{ isLoggined && <AuthBlock username={username} onLogout={onLogout} />}
		</nav>
	);
}

export default NavBar;
