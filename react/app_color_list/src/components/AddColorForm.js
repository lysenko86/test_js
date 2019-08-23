import React from 'react';
import PropTypes from 'prop-types';

class AddColorForm extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }
    submit(e) {
        const {_title, _color} = this.refs;
        e.preventDefault();
        alert(`New Color: ${_title.value} ${_color.value}`);
        //if (this.props.onNewColor) {   // Якщо аргумент не обов'язковий - завжди робити таку перевірку
            this.props.onNewColor(_title.value, _color.value);
        //}
        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }
    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref="_title" type="text" placeholder="color title..." required />
                <input ref="_color" type="color" required />
                <button>ADD</button>
            </form>
        )
    }
}
// А щє кращє заюзать PropTypes для перевірки аргументів
AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}
AddColorForm.defaultProps = {
    onNewColor: f=>f
}

// Завдяки ф-ції logColor роль компоненту AddColorForm зводиться до того, щоб тільки зібрати дані і передати їх кудись далі
const logColor = (title, color) => console.log(`New color: ${title} | ${color}`);

export default AddColorForm;
