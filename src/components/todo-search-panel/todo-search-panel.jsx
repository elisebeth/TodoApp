import React, { Component } from 'react';

import './todo-search-panel.css';

import TodoSearchFilter from '../todo-search-filter';

export default class TodoSearchPanel extends Component {

  state = {
    text: ''
  };

  changeInput = async (event) => {
    await this.setState({
      text: event.target.value
    });
    this.props.onSearch(this.state.text);
  };

  render() {
    return (
      <div className="todo__input">
        <input className="todo__search"
          placeholder="will write smth"
          type="text"
          onChange={this.changeInput}
          value={this.state.text}
        />
        <TodoSearchFilter onFilter={(filter) => this.props.onFilter(filter)} />
      </div>);
  }
}