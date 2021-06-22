import React, { Component } from 'react';
import './add-item-form.css';

export default class AddItemForm extends Component {

  state = {
    label: ''
  }; 
  
  onLabelChange = (event) => {
  
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.label.length !== 0) {

      this.props.addItem(this.state.label);
    }
    this.setState({
      label: ''
    });
  };

  
  render() {

    return (
      <form className='add-wrapper'
            onSubmit = { this.onSubmit }>

        <label className='add-label'>New Task</label>

        <input type='text' 
                className='add-input'
                onChange =  { this.onLabelChange }
                value = { this.state.label } />

        <button 
          className='add-btn'>
          ADD
        </button>
      </form>
    );
  };
}
