import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Originstyles } from '../styles/AppStyles';
import MapView, { Marker } from 'react-native-maps';

import logo from '../assets/logo.png';

export default function Destination({ navigation, route }) {
    const [origin, setOrigin] = useState(null);

    useEffect(() => {
      if (route.params) {
        setOrigin(route.params.city);
      }
    }, []);
  
    useEffect(() => {
      console.log('Origin:', origin);
    }, [origin]);

  const [mapRegion, setmapRegion] = useState({
      latitude: 40.636400560338195,
      longitude: -8.660183343715477,
      latitudeDelta: 3,
      longitudeDelta: 1
  });
  const [cityfinal, setCity] = useState('');

  const updateLocation = async () => {
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${cityfinal}&key=fab00b89dac04afa8df2f08004793e0b`);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
          const location = data.results[0].geometry;

          setmapRegion({
              latitude: location.lat,
              longitude: location.lng,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
          });
      }
  };

  return (
      <View style={Originstyles.container}>
          <TouchableOpacity style={Originstyles.backButton} onPress={() => navigation.navigate("Origin")}>
              <Text style={Originstyles.backButtonText}>←</Text>
          </TouchableOpacity>
          <Image source={logo} style={Originstyles.logo1} />
          <TextInput
              style={Originstyles.input}
              placeholder="CHOOSE THE DESTINATION"
              onChangeText={text => setCity(text)}
              onSubmitEditing={updateLocation}
          />
          <MapView style={Originstyles.map}
              region={mapRegion} >
              <Marker coordinate={mapRegion} title="Destination" />
          </MapView>
          <TouchableOpacity style={Originstyles.nextButton} onPress={() => navigation.navigate('Itenerary',{ City: origin, destination: cityfinal })}>
              <Text style={Originstyles.backButtonText}>→</Text>
          </TouchableOpacity>
      </View>
  )
}