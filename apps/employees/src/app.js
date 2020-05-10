import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthPage from './pages/auth-page';
import EmployeesPage from './pages/employees-page';
import NavBar from './components/nav-bar';
import Alert from './containers/alert';
import Modal from './containers/modal';
import ErrorMessage from './components/error-message';
import './scss/index.scss';

const App = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<div className="container pt-5">
				<Alert />
				<Switch>
					<Route path='/' exact component={AuthPage} />
					<Route path='/employees/:id?' component={EmployeesPage} />
					<Route render={({ location }) => {
						return <ErrorMessage message={`"${location.pathname}" - is unknown URL address.`} />;
					}} />
				</Switch>
			</div>
			<Modal />
		</BrowserRouter>
	);
};

export default App;
