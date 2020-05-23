import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
//import thunk from 'redux-thunk';

//import rootReducer from './reducers';
import App from './app';
import './scss/index.scss';

const store = {}//createStore(
// 	rootReducer,
// 	composeWithDevTools(applyMiddleware(thunk))
// );

const app = (
		<App />
);

ReactDOM.render(app, document.getElementById('root'));
