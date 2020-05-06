import React from 'react';
import AuthWelcome from '../components/auth-welcome';
import AuthForm from '../components/auth-form';

const AuthPage = () => {
	const isLogined = false;

	return isLogined ? <AuthWelcome /> : <AuthForm />;
}

export default AuthPage;
