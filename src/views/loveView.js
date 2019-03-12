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

class LoveView extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.mistyRose }}>
        <Text style={styles.baseText}>Love yourself.  It is important to stay positive because beauty comes from the inside out.{"\n"}
          Jenn Proske
        </Text>
      </View>
    );
  }
}

export default LoveView;