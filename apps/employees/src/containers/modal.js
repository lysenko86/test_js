import React from 'react';
import { connect } from 'react-redux';

import { modalHide } from '../actions/modal-actions';

const Modal = ({ isHidden, title, btnCloseTitle, component, afterClose, modalHide }) => {
	const modalClose = () => {
		modalHide();
		if (typeof afterClose === 'function'){
			afterClose();
		}
	}
	return isHidden ? null : (
		<div className="modal">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{title}</h5>
						<button type="button" className="close" onClick={modalClose}>
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">{component}</div>
					<div className={`modal-footer${!btnCloseTitle ? ' d-none' : ''}`}>
						<button
							type="button"
							className={`btn btn-secondary${!btnCloseTitle ? ' d-none' : ''}`}
							onClick={modalClose}
						>{btnCloseTitle}</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = ({ modal }) => ({
	isHidden: modal.isHidden,
	title: modal.title,
	btnCloseTitle: modal.btnCloseTitle,
	component: modal.component,
	afterClose: modal.afterClose
})

const mapDispatchToProps = (dispatch) => ({
	modalHide: () => dispatch(modalHide())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
