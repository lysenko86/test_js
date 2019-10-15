import React, { Component } from 'react';
import './item-add-form.css'

export default class ItemAddForm extends Component {
    render () {
        const { onAdded } = this.props;
        return (
            <div className="item-add-form">
                <button className="btn btn-outline-secondary" onClick={ () => { onAdded('Hello, world!'); } }>Add item</button>
            </div>
        );
    }
}
