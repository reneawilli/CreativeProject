import React, { Component } from 'react';
import ToDoItem from '../components/ToDoItem';
import PropTypes from 'prop-types';

markComplete =  (e) => {
  console.log(this.props)
}

class ThingsToDo extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <ToDoItem key={todo.id} todo={todo} markComplete=
      {this.props.markComplete}/>
    ));
  }
}

//PropTypes
ThingsToDo.propTypes = {
  todos:  PropTypes.array.isRequired
}

export default ThingsToDo;