import React from 'react';

const SearchForm = () => {
	return (
		<form className="form-inline">
			<label htmlFor="inlineFormInputName2">Name</label>
			<input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Employee Name" />
			<button type="submit" className="btn btn-primary my-1">Search</button>
		</form>
	);
}

export default SearchForm;
