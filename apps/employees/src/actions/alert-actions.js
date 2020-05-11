import { ALERT_SHOW, ALERT_HIDE } from './types';

// values of type: success, warning, danger, info

export const alertShow = (type, text) => ({
	type: ALERT_SHOW,
	payload: { type, text }
});

export const alertHide = () => ({
	type: ALERT_HIDE
});
