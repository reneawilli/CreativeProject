import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  baseText: {
    color:  colors.white,
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
});

class HopeView extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor:  colors.aqua }}>
        <Text style={styles.baseText}>
          Optimism is the faith that leads to achievement.  Nothing can be done without hope and confidence.{"\n"}
          Helen Keller
        </Text>
      </View>
    );
    }
  }

export default HopeView;

