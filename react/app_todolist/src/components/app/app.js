import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';
import './app.css';

export default class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term: '',
        filterProp: ''
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

    onSearchChange = (term) => {
        this.setState({ term });
    }

    search (items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    onFilterChange = (filterProp) => {
        this.setState({ filterProp });
    }

    filterElements (items, filterProp) {
        if (filterProp.length === 0) {
            return items;
        }

        const filter = filterProp.split(':');

        return items.filter((item) => {
            if (filter[1] === 'true') {
                filter[1] = true;
            } else if (filter[1] === 'false') {
                filter[1] = false;
            }
            return item[filter[0]] === filter[1];
        });
    }

    render () {
        const { todoData, term, filterProp } = this.state;
        const visibleItems = this.search(todoData, term);
        const filteredItems = this.filterElements(visibleItems, filterProp);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={ todoCount } done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={ this.onSearchChange }/>
                    <ItemStatusFilter onFilterChange={ this.onFilterChange }/>
                </div>
                <TodoList
                    todos={ filteredItems }
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant }
                    onToggleDone={ this.onToggleDone } />
                <ItemAddForm onAdded={ this.addItem } />
            </div>
        );
    }
};
