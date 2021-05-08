import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from '../todo-list';
import TodoHeader from '../todo-header';
import TodoSearchPanel from '../todo-search-panel';
import TodoAddItem from '../todo-add-item';

import './app.css';

export default class App extends Component {

  state = {
    text: '',
    filter: 'all',
    data: [
      this.createItem('Drink Coffee'),
      this.createItem('Make Awesome App'),
      this.createItem('Drink Tea')
    ]
  };

  createItem(label) {
    return {
      id: uuidv4(),
      label,
      isSpecial: false,
      done: false
    };
  }

  deleteItem = (delId) => {
    this.setState(({ data }) => {
      let newArr = data.filter(({ id }) => id !== delId);
      return {
        data: newArr
      }
    });
  };

  addItem = (text) => {
    const item = this.createItem(text);
    this.setState(({ data }) => {
      let newArr = [...this.state.data, item];
      return {
        data: newArr
      }
    });
  };

  switchDone = (id) => {
    this.setState(({ data }) => {
      const changeElement = data.findIndex((item) => item.id === id);
      const newArr = [
        ...data.slice(0, changeElement),
        { ...data[changeElement], done: !data[changeElement].done },
        ...data.slice(changeElement + 1, data.length)
      ];
      return {
        data: newArr
      }
    });
  };

  switchSpecial = (id) => {
    this.setState(({ data }) => {
      const changeElement = data.findIndex((item) => item.id === id);
      const newArr = [
        ...data.slice(0, changeElement),
        { ...data[changeElement], isSpecial: !data[changeElement].isSpecial },
        ...data.slice(changeElement + 1, data.length)
      ];
      return {
        data: newArr
      }
    });
  };

  search = (data, text) => {
    if (text.length === 0) {
      return data;
    }
    return data.filter((item) => item.label.toLowerCase().indexOf(text.toLowerCase()) > -1);
  };

  onSearch = (text) => {
    this.setState({ text });
  };

  filter = (data, filter) => {
    switch (filter) {
      case 'all':
        return data;
      case 'active':
        return data.filter((item) => !item.done);
      case 'done':
        return data.filter((item) => item.done);
      default:
        return data;
    };
  };

  onFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    let { data, text, filter } = this.state;
    let viewData = this.filter(this.search(data, text), filter);
    return (
      <div className="app" >
        <TodoHeader data={viewData} />
        <TodoSearchPanel
          onSearch={(text) => this.onSearch(text)}
          onFilter={(filter) => this.onFilter(filter)} />
        <TodoList
          data={viewData}
          toDeleted={(id) => this.deleteItem(id)}
          switchDone={(id) => this.switchDone(id)}
          switchSpecial={(id) => this.switchSpecial(id)} />
        <TodoAddItem
          addItem={(text) => this.addItem(text)} />
      </div>
    );
  }
}