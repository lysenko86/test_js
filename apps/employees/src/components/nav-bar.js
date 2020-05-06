import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav-bar.css';

const NavBar = () => {
	return (
		<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
			<div className="navbar-brand">Employees</div>
			<ul className="navbar-nav">
				<li className="nav-link">
					<NavLink className="nav-link" to='/' exact>Home page</NavLink>
				</li>
				<li className="nav-link">
					<NavLink className="nav-link" to='/employees'>Table page</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
