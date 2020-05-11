import { MODAL_SHOW, MODAL_HIDE } from './types';

export const modalShow = obj => ({
	type: MODAL_SHOW,
	payload: obj
});

export const modalHide = () => ({
	type: MODAL_HIDE
});
