import React from 'react';
import './App.css';

const App = () => {
	return (
		<Navbar />
		<div className="container pt-4">
			<Alert />
			<Switch>
				<Route path={'/'} exact component={Home} />
				<Route path={'/about'} component={About} />
			</Switch>
		</div>
	);
};

export default App;
