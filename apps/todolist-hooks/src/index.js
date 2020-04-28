/*
	source: https://www.youtube.com/watch?v=V1rhxheJg4A
	stack backend: nodejs, express, yarn, axios
	stack frontend: React, react-router-dom, node-sass, bootstrap
	npm install -g nodemon
	start ---> nodemon index.js

*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
