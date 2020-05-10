import axios from 'axios';

class FirebaseServiceClass {
	apiUrl = 'https://employees-6e502.firebaseio.com';

	employeesFetch = (funcSuccess, funcError) => {
		const url = `${this.apiUrl}/employees.json`;
		axios.get(url).then(({ data }) => {
			const employees = [];
			for (let key in data) {
				employees.push({ ...data[key], id: key });
			}
			funcSuccess(employees);
		}).catch(({ message }) => {
			funcError(message);
		});
	};

	employeesAdd = (funcSuccess, funcError, employee, cbAlert) => {
		const url = `${this.apiUrl}/employees.json`;
		axios.post(url, employee).then(({ data }) => {
			funcSuccess({ ...employee, id: data.name });
			if (typeof cbAlert === 'function') {
				cbAlert();
			}
		}).catch(({ message }) => {
			funcError(message);
		});
	};

	employeesGet = (funcSuccess, funcError, id) => {
		const url = `${this.apiUrl}/employees/${id}.json`;
		axios.get(url).then(({ data }) => {
			if (data !== null) {
				funcSuccess({ ...data, id });
			} else {
				funcError('Employee was not found.');
			}
		}).catch(({ message }) => {
			funcError(message);
		});
	};

	employeesEdit = (funcSuccess, funcError, employee, cbAlert) => {
		const { id } = employee;
		const url = `${this.apiUrl}/employees/${id}.json`;
		axios.put(url, employee).then(({ data }) => {
			funcSuccess({ ...data, id });
			if (typeof cbAlert === 'function') {
				cbAlert();
			}
		}).catch(({ message }) => {
			funcError(message);
		});
	};

	employeesRemove = (funcSuccess, funcError, id, cbAlert) => {
		const url = `${this.apiUrl}/employees/${id}.json`;
		axios.delete(url).then(() => {
			funcSuccess(id);
			if (typeof cbAlert === 'function') {
				cbAlert();
			}
		}).catch(({ message }) => {
			funcError(message);
		});
	};

};

const firebaseService = new FirebaseServiceClass();

export default firebaseService;
