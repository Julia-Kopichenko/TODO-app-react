import React, { Component } from "react";
import './item-status-filter.css';


class ItemStatusFilter extends Component {

  buttons = [
    { name: 'all', label: 'All'},
    { name: 'active', label: 'Active'},
    { name: 'done', label: 'Done'}
  ];

  render () {

    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'tab-active' : '';

      return (
        <button type='button'
            className = {`tab ${clazz}`}
            key = { name }
            onClick = {() => onFilterChange(name)}>
          { label }
        </button>
      );
    });
    
    return (

      <section className = 'tab-list'>
        { buttons }
      </section>
    );
  }
}

export default ItemStatusFilter;


