import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

  render () {

    const { label, onDeleted, 
            onToggleImportant, onToggleDone, 
            important, done } = this.props;

    let classNames = 'todo-list-item';
    
    if (done) {
      classNames += ' done';
    }
    
    if (important) {
      classNames += ' important';
    }
  
    return (
      <span className = { classNames }>
        <span 
          className = 'todo-list-item-label'
          onClick = { onToggleDone } >
          { label }
        </span>
  
        <button type = 'button'
          className = 'important-button important-button--not-active'
          onClick = { onToggleImportant }>
        </button>
  
        <button type = 'button'
          className = 'bin-button'
          onClick = { onDeleted }>
        </button>
      </span>
    );
  }
}

