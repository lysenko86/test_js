import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import App from './app';
import ErrorBoundary from './components/error-boundary';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</Provider>,
	document.getElementById('root')
);
