import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css'

const TodoList = ({ todos, searchValue, onDeleted, onToggleImportant, onToggleDone }) => {
    const filteredElements = todos.filter((el) => !searchValue || el.label.includes(searchValue));
    const elements = filteredElements.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={ id } className="list-group-item">
                <TodoListItem
                    { ...itemProps }
                    onDeleted={ () => onDeleted(id) }
                    onToggleImportant={ () => onToggleImportant(id) }
                    onToggleDone={ () => onToggleDone(id) } />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};

export default TodoList;
