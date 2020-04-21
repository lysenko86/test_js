import React, { Component } from 'react';
import Spinner from '../spinner';
import SwapiService from '../../services/swapi-service';
import './person-details.css';

export default class PersonDetails extends Component {
	swapiService = new SwapiService();
	state = { person: null };

	componentDidMount () {
		this.updatePerson();
	}

	componentDidUpdate (prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updatePerson();
		}
	}

	updatePerson () {
		const { personId } = this.props;
		if (!personId) {
			return;
		}
		// ??? куда влепить Spinner
		this.swapiService.getPerson(personId).then(person => {
			this.setState({ person });
		});
	}

	render () {
		if (!this.state.person) {
			return <span>Select a person from a list</span>;
		}
		const { id, name, gender, birthYear, eyeColor } = this.state.person;
		return (
			<div className="person-details card">
				<img
					className="person-image"
					src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
					alt="character"
				/>
				<div className="card-body">
					<h4>{name}</h4>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<span className="term">Gender</span>
							<span>{gender}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Birth year</span>
							<span>{birthYear}</span>
						</li>
						<li className="list-group-item">
							<span className="term">Eye color</span>
							<span>{eyeColor}</span>
						</li>
					</ul>
				</div>
			</div>
		);
	};
};
