import React from 'react';
import ItemList from '../item-list';
import { withData, withChildFunction } from '../../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const {
	getAllPeople,
	getAllStarships,
	getAllPlanets
} = swapiService;

const renderName = ({ name }) => <span>{name}</span>;
const renderMoelAndName = ({ model, name }) => <span>{name} ({model})</span>;

const PersonList = withData(
	withChildFunction(ItemList, renderName),
	getAllPeople
);
const PlanetList = withData(
	withChildFunction(ItemList, renderName),
	getAllPlanets
);
const StarshipList = withData(
	withChildFunction(ItemList, renderMoelAndName),
	getAllStarships
);

export {
	PersonList,
	PlanetList,
	StarshipList
};
