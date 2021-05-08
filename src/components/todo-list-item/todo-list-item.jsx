import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {
  render() {
    let classNames = 'item__content';

    let { label, onDeleted, isSpecial, done, switchSpecial, switchDone } = this.props;

    if (isSpecial) {
      classNames += ' special__content';
    }

    if (done) {
      classNames += ' done';
    }

    return (
      <div className="content__place">
        <span
          className={classNames}
          onClick={switchDone}
        >
          {label}
        </span >
        <div className="button__box">
          <button
            className="button far fa-trash-alt trash"
            onClick={onDeleted}></button>
          <button
            className="button fas fa-exclamation point"
            onClick={switchSpecial}></button>
        </div>
      </div>
    );
  }
}