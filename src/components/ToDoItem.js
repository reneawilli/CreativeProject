import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../styles/colors';
import checkmark from '../assets/checkmark.png';
import CheckBox from '../components/Checkbox';


class ToDoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      paddingBottom: 10,
      borderBottomColor: colors.mistyRose,
      borderBottomWidth: 2,
      textDecorationLine: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <View style={{ flexDirection: "row", paddingHorizontal: 5 }}>
        <CheckBox
          handlePress={this.props.markComplete.bind(this, id)}
          checked={completed}
        />
        <Text>{'   '}</Text>
        <Text style={this.getStyle()} >{title}</Text>
      </View >
    )
  }
}

//PropTypes
ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default ToDoItem;


