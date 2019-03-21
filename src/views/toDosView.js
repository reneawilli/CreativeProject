import React, { Component } from 'react';
import ThingsToDo from '../components/ThingsToDo';

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
        completed: true,
      },
      {
        id: 3,
        title: "Brave New World",
        completed: false,
      },
    ]
  }

  render() {
    return (
      <ThingsToDo todos={this.state.todos}/>
    );
  }
}

export default ToDosView;