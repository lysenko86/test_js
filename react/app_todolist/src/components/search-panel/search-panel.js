import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    state = {
        searchValue: ''
    }

    onChange = (e) => {
        this.setState({
            searchValue: e.target.value
        });
        console.log(this.state.searchValue);
    }

    render () {
        return (
            <input
                type="text"
                className="form-control search-input"
                onChange={ this.onChange }
                placeholder="search"
                value={ this.state.searchValue } />
        );
    }
}
