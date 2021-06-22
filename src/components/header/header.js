import React, { Component } from "react";
import SearchPanel from '../search-panel';
import logo from './logo.svg';
import './header.css';

export default class Header extends Component {

  render() {

    const { onSearchChange } = this.props;

    return (

      <header className = 'header'>
        <img src = { logo } 
          className = 'logo' 
          alt = 'logo'>
          </img>
          
        <SearchPanel 
          onSearchChange = { onSearchChange }/>
      </header>
    );
  };
};



