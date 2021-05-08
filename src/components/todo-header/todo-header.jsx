import React from 'react';

import './todo-header.css';

const TodoHeader = ({ data }) => {
  const countDone = data.filter((item) => item.done === true).length;
  const countMore = data.length - countDone;
  return (
    <header className="header">
      <h1 className="todo__header">Todo List</h1>
      <p className="header__stats">{`${countMore} more to do, ${countDone} done `}</p>
    </header>
  );
};

export default TodoHeader;