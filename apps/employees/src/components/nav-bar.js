import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	const isLoggined = false;
	const username = null;
	const onLogout = () => {};
	return (
		<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
			<div className="menu-container">
				<div className="navbar-brand">Employees</div>
				<ul className="navbar-nav">
					<li className="nav-link">
						<NavLink className="nav-link" to='/' exact>Auth page</NavLink>
					</li>
					<li className="nav-link">
						<NavLink className="nav-link" to='/employees/'>Table page</NavLink>
					</li>
				</ul>
			</div>
			{ isLoggined && (
				<div className="auth-container">
					<div className="auth-username">Hello, user!</div>
					<button
						type="button"
						className="btn btn-sm btn-outline-dark"
						onClick={onLogout}
					>Logout</button>
				</div>
			)}
		</nav>
	);
}

export default NavBar;
