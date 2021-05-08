import React, { Component } from 'react';

import './todo-search-filter.css';

export default class TodoSearchFilter extends Component {

  state = {
    filter: 'all'
  };

  changeFilter = async (filter) => {
    await this.setState({ filter });
    this.props.onFilter(this.state.filter);
  }

  render() {

    let { filter } = this.state;

    let defaultClass = 'list__button';

    let first = '', second = '', third = '';

    if (filter === 'all') {
      first = defaultClass + ' first active';
      second = defaultClass;
      third = defaultClass + ' last';
    }
    else if (filter === 'active') {
      second = defaultClass + ' active';
      first = defaultClass + ' first';
      third = defaultClass + ' last';
    }
    else if (filter === 'done') {
      third = defaultClass + ' last active';
      second = defaultClass;
      first = defaultClass + ' first';
    }

    return (
      <ul className="input__list">
        <button className={first} onClick={() => this.changeFilter('all')}>All</button>
        <button className={second} onClick={() => this.changeFilter('active')}>Active</button>
        <button className={third} onClick={() => this.changeFilter('done')}>Done</button>
      </ul>
    );
  }
}
