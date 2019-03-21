import React, { Component } from 'react';
import ToDoItem from '../components/ToDoItem';
import PropTypes from 'prop-types';

class ThingsToDo extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <ToDoItem key={todo.id} todo={todo} />
    ));
  }
}

//PropTypes
ThingsToDo.propTypes = {
  todos:  PropTypes.array.isRequired
}

export default ThingsToDo;