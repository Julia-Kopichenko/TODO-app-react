import React, { Component } from "react";
import './index.css';

import Header from './components/header';
import Main from './components/main';

export default class App extends Component {
  
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Task 1'),
      this.createTodoItem('Task 2'),
      this.createTodoItem('Task 3')
    ],
    term: '',
    filter: 'all'
  };

  createTodoItem(label) {
     
      return {
        label,
        important: false,
        done: false,
        id:this.maxId++
      }
  }

  // createTodoItem(label) {
  //   if (label.length !== 0) {
     
  //     return {
  //       label,
  //       important: false,
  //       done: false,
  //       id:this.maxId++
  //     }
  //   }
  // }

  addItem = (text) => {
    
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {

      const newArr = [
        newItem,
        ...todoData
      ];

      return {
        todoData:newArr
      }
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {

      const index = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, index);
      const after = todoData.slice(index + 1);
      const newArray = [...before,...after];

      return {
        todoData: newArray
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex((el) => el.id === id);

    // update object
    const oldItem = arr[index];
    const newItem ={...oldItem, 
      [propName]: !oldItem[propName]};
    
    // construct new array
    return [
      ...arr.slice(0, index),
      newItem,
      ...arr.slice(index + 1)
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
  };

  onSearchChange = (term) => {
    this.setState({ term });
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label
        .toLowerCase()
        .indexOf(term.toLowerCase()) > -1;
    });
  }

  filter(items, filter) {

    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {

    const { todoData, term, filter } = this.state;

    const visibleItems = this.filter(
      this.search(todoData, term), filter);
    
    return (

      <div className = 'content-wrapper'>
        <Header 
          onSearchChange = { this.onSearchChange } />
        <Main 
          todos = { visibleItems }
          addItem = { this.addItem }
          onDeleted = { this.deleteItem }
          onToggleImportant = { this.onToggleImportant }
          onToggleDone = { this.onToggleDone } 
          filter = { filter }
          onFilterChange = { this.onFilterChange } />
      </div>
    );
  };
}
