import React, { Component } from "react";
import './search-panel.css';

export default class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchChange = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  }

  render() {

    return (
      
      <input type='text'
        className = 'search-input'
        placeholder = 'Search task for to do' 
        value = {this.state.term}
        onChange = {this.onSearchChange}
      />
    );
  };
}
