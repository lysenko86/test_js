import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import ErrorIndicator from '../error-indicator';
import './app.css';

const App = () => {
	return (
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/card" component={CartPage} />
			<Route render={({ location }) => {
				const errorText = `"${location.pathname}" - is unknown URL address.`;
				return <ErrorIndicator text={errorText} />;
			}}></Route>
		</Switch>
	);
};

export default App;
