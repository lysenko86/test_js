import React from 'react';
import { connect } from 'react-redux';

import { alertHide } from '../actions/alert-actions';

const Alert = ({ type, text, alertHide }) => {
	return !text ? null : (
		<div className={`alert alert-${type}`}>
			<strong>Attention!</strong>&nbsp; {text}
			<button type="button" className="close" onClick={alertHide}>
				<span>&times;</span>
			</button>
		</div>
	);
};

const mapStateToProps = ({ alert }) => ({
	type: alert.type,
	text: alert.text
});

const mapDispatchToProps = (dispatch) => ({
	alertHide: () => dispatch(alertHide())
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
