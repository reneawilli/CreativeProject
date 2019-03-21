import React, { Component } from 'react';
import { Text, View } from 'react-native';
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
    return (
      <View style={{flexDirection: "row", paddingHorizontal: 5}}>
        <CheckBox /> 
        <Text style={this.getStyle()} >{this.props.todo.title}</Text>
      </View>
    )
  }
}

//PropTypes
ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default ToDoItem;


