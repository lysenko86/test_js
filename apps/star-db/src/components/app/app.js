import React, { Component } from 'react';
import Header from '../header';
//import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry";
import './app.css';
import {
	PersonDetails,
	PlanetDetails,
	StarshipDetails,
	PersonList,
	PlanetList,
	StarshipList
} from '../sw-components';

export default class App extends Component {
	state = {
		showRandomPlanet: true
	};

	toggleRandomPlanet = () => {
		this.setState((state) => {
			return {
				showRandomPlanet: !state.showRandomPlanet
			}
		});
	};

	render () {
		//const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

		return (
			<ErrorBoundry>
				<div className="stardb-app">
					<Header />

					<PersonDetails itemId={11} />
					<PlanetDetails itemId={5} />
					<StarshipDetails itemId={9} />

					<PersonList />
					<StarshipList />
					<PlanetList />
				</div>
			</ErrorBoundry>
		);
	};
};
