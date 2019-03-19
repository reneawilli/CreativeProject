import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from '../components/PlaceInput';
import PlaceList from '../components/PlaceList';
import placeImage from '../assets/beautiful-place.jpg';

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
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: placeImage 
        })
      };
    });
  };

placeDeletedHandler = key => {
  this.setState(prevState => {
    return {
      places: prevState.places.filter(place => {
        return place.key !== key;
      })
    };
  });
};

render() {
  return (
    <View style={styles.container}>
      <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      <PlaceList places={this.state.places}
        onItemDeleted={this.placeDeletedHandler}
      />
    </View>
  );
}
}

export default AwesomePlaceView;