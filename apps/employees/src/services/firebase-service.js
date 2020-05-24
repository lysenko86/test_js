import axios from 'axios';

class FirebaseServiceClass {
	apiUrl = 'https://employees-6e502.firebaseio.com';

	usersGetByToken = async token => {
		const url = `${this.apiUrl}/users.json`;
		const res = await axios.get(url);
		let user = null;
		for (const key in res.data) {
			if (res.data[key].token === token) {
				user = res.data[key];
			}
		}
		return user;
	};

	usersGetByLoginPassword = async (login, password) => {
		const url = `${this.apiUrl}/users.json`;
		const res = await axios.get(url);
		let user = null;
		for (const key in res.data) {
			if (res.data[key].login === login && res.data[key].password === password) {
				user = res.data[key];
			}
		}
		return user;
	};

	employeesFetch = () => {
		const url = `${this.apiUrl}/employees.json`;
		return axios.get(url);
	};

	employeesGet = id => {
		const url = `${this.apiUrl}/employees/${id}.json`;
		return axios.get(url);
	};

	employeesAdd = employee => {
		const url = `${this.apiUrl}/employees.json`;
		return axios.post(url, employee);
	};

	employeesEdit = employee => {
		const url = `${this.apiUrl}/employees/${employee.id}.json`;
		return axios.put(url, employee);
	};

	employeesRemove = id => {
		const url = `${this.apiUrl}/employees/${id}.json`;
		return axios.delete(url);
	};

};

const firebaseService = new FirebaseServiceClass();

export default firebaseService;
