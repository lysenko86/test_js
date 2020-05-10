import React, { Component } from 'react';

export default class EmployeeForm extends Component {
	state = {
		name: this.props.employee ? this.props.employee.name : '',
		active: this.props.employee ? this.props.employee.active : false,
		department: this.props.employee ? this.props.employee.department : '',
		nameInvalid: !this.props.employee,
		departmentInvalid: !this.props.employee
	};

	onActiveChange = (e) => this.setState({ active: e.target.checked });
	onNameChange = (e) => this.setState({
		name: e.target.value,
		nameInvalid: e.target.value.trim().length < 3
	});
	onDepartmentChange = (e) => this.setState({
		department: e.target.value,
		departmentInvalid: !e.target.value.trim()
	});

	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.nameInvalid && !this.state.departmentInvalid) {
			const { name, active, department } = this.state;
			const id = this.props.employee ? this.props.employee.id : null
			this.props.onSubmit({ id, name, active, department });
		}
	}

	render() {
		const { name, active, department, nameInvalid, departmentInvalid } = this.state;

		return (
			<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<label>Enter employee name:</label>
					<input
						type="text"
						className={`form-control${nameInvalid ? ' is-invalid' : ''}`}
						value={name}
						onChange={this.onNameChange}
						placeholder="Employee name"
					/>
					<div className="invalid-feedback">This field is required and has to contain more than 3 letters</div>
				</div>
				<div className="form-group form-check">
					<input
						type="checkbox"
						className="form-check-input"
						id="fieldActive"
						checked={active}
						onChange={this.onActiveChange}
					/>
					<label className="form-check-label" htmlFor="fieldActive">set an active</label>
				</div>
				<div className="form-group">
					<label>Select employee department:</label>
					<select
						className={`form-control${departmentInvalid ? ' is-invalid' : ''}`}
						value={department}
						onChange={this.onDepartmentChange}
					>
						<option value=""></option>
						<option value="HR">HR</option>
						<option value="Tech">Tech</option>
						<option value="Finance">Finance</option>
					</select>
					<div className="invalid-feedback">This field is required</div>
				</div>
				<button type="submit" className="btn btn-primary btn-sm">{this.props.employee ? 'Edit' : 'Add'}</button>
				<button className="btn btn-secondary btn-sm float-right" onClick={this.props.onClose}>Cancel</button>
			</form>
		);
	}
};
