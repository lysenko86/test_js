import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ]

    state = {
        filterProp: ''
    }

    filterChange = (e) => {
        const filterProp = e.target.value;
        this.setState({ filterProp });
        this.props.onFilterChange(filterProp);
    }

    render () {

        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
            return <button
                type="button"
                className={ `btn ${clazz}` }
                key={ name }
                onClick={ () => onFilterChange(name) }>{label}</button>
        });

        const { filterProp } = this.state;
        return (
            <div className="btn-group">
                { buttons }
            </div>
        );
    }
};
