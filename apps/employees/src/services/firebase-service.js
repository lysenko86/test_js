import axios from 'axios';

class FirebaseServiceClass {
	apiUrl = 'https://employees-6e502.firebaseio.com';

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

	employeesEdit = async employee => {
		const url = `${this.apiUrl}/employees/${employee.id}.json`;
		return await axios.put(url, employee);
	};

	employeesRemove = id => {
		const url = `${this.apiUrl}/employees/${id}.json`;
		return axios.delete(url);
	};

};

const firebaseService = new FirebaseServiceClass();

export default firebaseService;
