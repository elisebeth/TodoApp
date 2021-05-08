import React, { Component } from 'react';

import './todo-add-item.css';

export default class TodoAddItem extends Component {

  state = {
    label: ''
  };

  changeInput = (event) => {
    this.setState({
      label: event.target.value
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="todo-add-item"
        onSubmit={this.onSubmit}>
        <input
          type="text"
          className="todo-add-item__input"
          placeholder="What needs to be done?.."
          onChange={this.changeInput}
          value={this.state.label} />
        <button
          className="todo-add-item__button"> Add Item
        </button>
      </form>
    );
  }
}