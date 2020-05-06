import React from 'react';
import NavBar from './components/nav-bar';
import Alert from './components/alert';
import ErrorBoundary from './components/error-boundary';
import ErrorMessage from './components/error-message';
import AuthPage from './pages/auth-page';
import EmployeesPage from './pages/employees-page';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const App = () => {
	return (
		<Provider store={store}>
			<ErrorBoundary>
				<BrowserRouter>
					<NavBar />
					<div className="container pt-5">
						<Alert />
						<Switch>
							<Route path='/' exact component={AuthPage} />
							<Route path='/employees' component={EmployeesPage} />
							<Route render={({ location }) => {
								return <ErrorMessage message={`"${location.pathname}" - is unknown URL address.`} />
							}} />
						</Switch>
					</div>
				</BrowserRouter>
			</ErrorBoundary>
		</Provider>
	);
};

export default App;
