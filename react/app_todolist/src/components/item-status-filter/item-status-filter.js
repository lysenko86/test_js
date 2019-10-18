import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    state = {
        filterProp: ''
    }

    filterChange = (e) => {
        const filterProp = e.target.value;
        this.setState({ filterProp });
        this.props.onFilterChange(filterProp);
    }

    render () {
        const { filterProp } = this.state;
        return (
            <div className="btn-group">
                <button
                    type="button"
                    className={ `btn ${!filterProp ? 'btn-info' : 'btn-outline-secondary'}` }
                    value=""
                    onClick={ this.filterChange }>All</button>
                <button
                    type="button"
                    className={ `btn ${filterProp === 'done:false' ? 'btn-info' : 'btn-outline-secondary'}` }
                    value="done:false"
                    onClick={ this.filterChange }>Active</button>
                <button
                    type="button"
                    className={ `btn ${filterProp === 'done:true' ? 'btn-info' : 'btn-outline-secondary'}` }
                    value="done:true"
                    onClick={ this.filterChange }>Done</button>
            </div>
        );
    }
};
