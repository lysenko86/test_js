import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

export default class App extends Component {
    constructor () {
        super();
        this.maxId = 100;
        this.state = {
            todoData: [
                this.createTodoItem('Drink Coffee'),
                this.createTodoItem('Make Awesome App'),
                this.createTodoItem('Have a lunch')
            ],
            searchValue: ''
        };
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        };
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return { todoData: newArray };
        });
    }

    addItem = (text) => {
        this.setState(({ todoData }) => {
            const newItem = this.createTodoItem(text);
            const newArray = [...todoData, newItem];
            return { todoData: newArray };
        });
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    }

    getSearchValue = (searchValue) => {
        this.setState({ searchValue });
    }

    render () {
        const { todoData } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel onFilter={ this.getSearchValue } />
                    <ItemStatusFilter />
                </div>
                <TodoList
                    todos={ todoData }
                    searchValue= { this.state.searchValue }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone } />
                <ItemAddForm onAdded={ this.addItem } />
            </div>
        );
    }
};
