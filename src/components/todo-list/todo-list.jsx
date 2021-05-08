import React from 'react';

import TodoListItem from '../todo-list-item';

import './todo-list.css';

const TodoList = ({ data, toDeleted, switchDone, switchSpecial }) => {
  const elements = data.map(({ id, label, isSpecial, done }) => {
    return (<li className="todo__list-item" key={id}>
      <TodoListItem
        label={label}
        isSpecial={isSpecial}
        done={done}
        onDeleted={() => toDeleted(id)}
        switchDone={() => switchDone(id)}
        switchSpecial={() => switchSpecial(id)} />
    </li>);
  })

  return (
    <ul className="todo__list">
      {elements}
    </ul>
  );
};

export default TodoList;