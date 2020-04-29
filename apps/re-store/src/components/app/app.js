import React from 'react';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';
import ErrorIndicator from '../error-indicator';
import { BookstoreServiceProvider } from '../bookstore-service-context';
import './app.css';

const App = () => {
	return (
		<ErrorBoundry>
			<BookstoreServiceProvider bookstoreService={'TEST TEST TEST TEST'}>
				<div className="container app-component">
					<div className="app-component__spinner"><Spinner /></div>
					<div className="app-component__error-indicator"><ErrorIndicator text="Bad connection"/></div>
				</div>
			</BookstoreServiceProvider>
		</ErrorBoundry>
	);
};

export default App;
