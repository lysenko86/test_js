/*
	source: https://www.udemy.com/course/pro-react-redux
	stack: create-react-app, react, prop-types, react-router-dom, redux, react-redux
	start ---> npm start
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context';

import store from './store';

const bookstoreService = new BookstoreService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundry>
			<BookstoreServiceProvider value={bookstoreService}>
				<Router>
					<App />
				</Router>
			</BookstoreServiceProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
);
