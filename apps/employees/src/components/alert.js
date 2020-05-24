import React from 'react';
import { connect } from 'react-redux';

import { hideAlert } from '../actions';

const Alert = ({ type, message, hideAlert }) => {
	const classNames = `alert alert-${type || 'success'}`;

	return !message ? null : (
		<div className={classNames}>
			<strong>Attention!</strong>&nbsp; {message}
			<button type="button" className="close" onClick={hideAlert}>
				<span>&times;</span>
			</button>
		</div>
	);
};

const mapStateToProps = ({ alert }) => ({
	type: alert.type,
	message: alert.message
});

const mapDispatchToProps = {
	hideAlert
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
