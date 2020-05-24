import React, { Component } from 'react';
import { connect } from 'react-redux';

import AuthBlock from './auth-block';
import MenuItems from './menu-items';
import Spinner from '../../components/spinner';
import { fetchUser, resetUser } from '../../actions';

class NavBar extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}

	onLogout = () => {
		this.props.resetUser();
	};

	render() {
		const { user, isLoggedIn, isLoading } = this.props;

		return (
			<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
				<div className="menu-container">
					<div className="navbar-brand">Employees</div>
					<MenuItems />
				</div>
				{ isLoading && <Spinner /> }
				{ !isLoading && isLoggedIn && <AuthBlock username={user.username} onLogout={this.onLogout} /> }
			</nav>
		);
	}
};

const mapStateToProps = ({ user }) => ({
	user: user.data,
	isLoggedIn: user.isLoggedIn,
	isLoading: user.isLoading
});

const mapDispatchToProps = {
	fetchUser,
	resetUser
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
