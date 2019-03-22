import React, { Component } from 'react';
import ThingsToDo from '../components/ThingsToDo';
import ToDoItem from '../components/ToDoItem';

class ToDosView extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Eat Pray Love",
        completed: false,
      },
      {
        id: 2,
        title: "A Wrinkle in Time",
        completed: false,
      },
      {
        id: 3,
        title: "Brave New World",
        completed: false,
      },
    ]
  }

//Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
          console.log(todo.completed);
        }
        return todo;
      })
    });
  }

  render() {
    return (
      <ThingsToDo todos={this.state.todos}
        markComplete={this.markComplete} />
    );
  }
}

export default ToDosView;