import React, { Component } from "react";
import './main.css';

import ItemStatusFilter from '../item-status-filter';
import AddItemForm from '../add-item-form';
import TodoList from '../todo-list';


export default class Main extends Component {

  render() {

    const { todos, addItem, onDeleted, onToggleImportant, onToggleDone, filter, onFilterChange } = this.props;
    // console.log(this.props)

    return (
      
      <main className = 'main'>
        <ItemStatusFilter 
          filter = { filter }
          onFilterChange = { onFilterChange } />

        <AddItemForm
          addItem = { addItem } />

        <TodoList 
          todos = { todos }
          onDeleted = { onDeleted } 
          onToggleImportant = { onToggleImportant }
          onToggleDone = { onToggleDone } />
      </main>
    );
  };
};