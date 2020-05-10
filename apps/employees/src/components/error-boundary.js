import React, { Component } from 'react';

import ErrorMessage from './error-message';

export default class ErrorBoundary extends Component {
	state = { errorMessage: '' }

	componentDidCatch(err) {
		this.setState({ errorMessage: err.message });
	}

	render() {
		const { children } = this.props;
		const { errorMessage } = this.state;
		return errorMessage ? <ErrorMessage message={errorMessage} /> : children;
	}
};
