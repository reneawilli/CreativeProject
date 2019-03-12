import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import FetchLocation from '../components/FetchLocation';
import UsersMap from '../components/UsersMap';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class MapView extends React.Component {
  state = {
    userLocation: null,
    usersPlaces: []
  }

  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        userLocation: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0421,
        }
      });
      fetch('https://greatproject-192d7.firebaseio.com/places.json', {
        method: 'POST',
        body: JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }, err => console.log(err));
  }

  getUserPlacesHandler = () => {
    fetch("https://greatproject-192d7.firebaseio.com/places.json")
      .then(res => res.json())
      .catch(parsedRes => {
        const placesArray = [];
        for (const key in parsedRes) {
          placesArray.push({
            latitude: parsedRes[key].latitude,
            longitude: parsedRes[key].longitude,
            id: key
          });
        }
        this.setState({
          usersPlaces: placesArray
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <Button title="Get User Places" onPress=
            {this.getUserPlacesHandler} />
        </View>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <UsersMap
          userLocation={this.state.userLocation}
          usersPlaces={this.state.usersPlaces}
        />
      </View>
    );
  }
}

export default MapView;





