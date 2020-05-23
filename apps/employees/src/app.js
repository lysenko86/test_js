import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary';
import ErrorMessage from './components/error-message';
import NavBar from './components/nav-bar';
import AuthPage from './pages/auth-page';
import EmployeesPage from './pages/employees-page';
//import Alert from './containers/alert';

const App = () => {
	return (
		<ErrorBoundary>
			<BrowserRouter>
				<NavBar />
				<div className="container pt-5">
					<Switch>
						<Route path='/' exact component={AuthPage} />
						<Route path='/employees/:id?' component={EmployeesPage} />
						<Route render={({ location }) => {
							return <ErrorMessage message={`"${location.pathname}" - is unknown URL address.`} />;
						}} />
					</Switch>
				</div>
			</BrowserRouter>
		</ErrorBoundary>
	);
};

export default App;
