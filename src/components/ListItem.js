import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create ({
  listItem: {
    width:  "100%",
    marginBottom:  5,
    padding:  10,
    backgroundColor:  "#eee"
  },
});

const listItem = (props) => (
  <View style={styles.listItem}>
    <Text>{props.placeName}</Text>
  </View>
);

export default listItem;


