import React, { Component } from 'react';
import './search-panel.css';

const SearchPanel = ({ onFilter }) => {
    return (
        <input
            type="text"
            className="form-control search-input"
            onChange={ (e) => onFilter(e.target.value) }
            placeholder="search" />
    );
}

export default SearchPanel;
