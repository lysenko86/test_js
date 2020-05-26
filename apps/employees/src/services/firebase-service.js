import axios from 'axios';

class FirebaseServiceClass {
	apiUrl = 'https://employees-6e502.firebaseio.com';



	usersGetByToken = async token => {
		const url = `${this.apiUrl}/users.json?orderBy="token"&equalTo="${token}"`;
		const res = await axios.get(url);
		const userId = Object.keys(res.data)[0];
		return (userId && res.data[userId]) || null;
	};

	usersGetByLoginPassword = async (login, password) => {
		const url = `${this.apiUrl}/users.json?orderBy="login"&equalTo="${login}"`;
		const res = await axios.get(url);
		const userId = Object.keys(res.data)[0];
		const user = (userId && res.data[userId]) || null;
		return user && user.password === password ? user : null;
	};



	employeesIdsFetch = async () => {
		const url = `${this.apiUrl}/employees.json?shallow=true`;
		const res = await axios.get(url);
		return res.data ? Object.keys(res.data) : [];
	};
	employeesFetch = async (page, countOnPage) => {
		const ids = await this.employeesIdsFetch();
		const countItems = ids.length;
		ids.sort();
		const indexId = countOnPage * (page - 1);
		const startId = ids[indexId];
		const limitToFirst = countOnPage ? `&limitToFirst=${countOnPage}` : '';
		const startAt = startId ? `&startAt="${startId}"` : '';
		const url = `${this.apiUrl}/employees.json?orderBy="$key"${limitToFirst}${startAt}`;
		const res = await axios.get(url);
		const items = res.data || {};
		return { items, countItems };
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
