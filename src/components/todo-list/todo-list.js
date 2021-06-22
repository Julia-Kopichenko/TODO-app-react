import React from "react";
import './todo-list.css';

import TodoListItem from "../todo-list-item";

const TodoList = ( { todos, onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = todos.map((item) => {

    const { id, ...itemProps } = item;

    return (

      <li key = { id }>
        <TodoListItem 
          { ... itemProps }
          onDeleted = {() => onDeleted(id)} 
          onToggleImportant = {() => onToggleImportant(id)} 
          onToggleDone = {() => onToggleDone(id)} />
      </li>
    );
  });

  return (

    <ul className = 'todo-list'>
      { elements }
    </ul>
  );
};

export default TodoList;