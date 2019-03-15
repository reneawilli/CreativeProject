import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from '../components/PlaceInput';
import PlaceList from '../components/PlaceList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "flex-start"
  },
});

class AwesomePlaceView extends React.Component {
  state = {
    places: []
  };

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} /> 
      </View>
    );
  }
}
            
export default AwesomePlaceView;