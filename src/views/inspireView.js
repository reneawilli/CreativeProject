import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  baseText: {
    color:  colors.white,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});

class InspireView extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.aquamarine }}>
        <Text style={styles.baseText}>Surround yourself with people and things that inspire you.  Learn everything you can.{"\n"}
          Jameela Jamil
        </Text>
      </View>
    );
  }
}

export default InspireView;

