import React, { Component } from 'react';
import ItemList from '../item-list';
import Row from '../row';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import './people-page.css';
import SwapiService from '../../services/swapi-service';

export default class PeoplePage extends Component {
	swapiService = new SwapiService();
	state = {
		selectedPerson: 3
	};

	onPersonSelected = (id) => {
		this.setState({ selectedPerson: id });
	};

	render () {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onPersonSelected}
				getData={this.swapiService.getAllPeople}
			>
				{(i) => (
					`${i.name} (${i.birthYear})`
				)}
			</ItemList>
		);

		const itemDetails = (
			<ErrorBoundry>
				<ItemDetails itemId={this.state.selectedPerson} />
			</ErrorBoundry>
		);

		return (
			<Row left={itemList} right={itemDetails} />
		);
	}
}
