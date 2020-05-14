/*
	source: https://www.udemy.com/course/react-hooks-writing-real-project/
	stack: create-react-app, react, хуки, авторизація, axios, classnames, query-string
	start ---> yarn start
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import Routes from 'routes';
import TopBar from 'components/topBar';

const App = () => {
	return (
		<div>
			<Router>
				<TopBar />
				<Routes />
			</Router>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
