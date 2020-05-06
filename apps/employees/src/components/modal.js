import React from 'react';
import '../css/modal.css';

const Modal = () => {
	let isHidden = true;
	const title = 'View profile';
	const btnOkTitle = 'Save changes';
	const btnOkHidden = false;
	const content = '...';

	const modalClose = () => {
		isHidden = true;
		console.log('Close modal');
	}

	const modalOk = () => {
		modalClose();
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
					<div className="modal-body">{content}</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={modalClose}
						>Close</button>
						<button
							type="button"
							className={`btn btn-primary${btnOkHidden ? ' d-none' : ''}`}
							onClick={modalOk}
						>{btnOkTitle}</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
