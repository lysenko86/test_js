import { USERS__FETCH_USER, USERS__RESET_USER } from './types';

export const fetchUser = () => ({
	type: USERS__FETCH_USER
});

export const resetUser = () => ({
	type: USERS__RESET_USER
});
