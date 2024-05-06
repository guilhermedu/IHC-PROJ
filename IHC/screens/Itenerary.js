import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Originstyles } from '../styles/AppStyles';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';

import logo from '../assets/logo.png';

export default function Itenerary({ route, navigation }) {
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            if (route.params) {
                setOrigin(route.params.initialCity);

                setDestination(route.params.destination);
            }
        })();
    }, []);

    useEffect(() => {
        console.log('Origin:', origin);
        console.log('Destination:', destination);
    }, [origin, destination]);

    const fetchDirections = async (start, end) => {
        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${start},${end}&key=fab00b89dac04afa8df2f08004793e0b`);
        const data = await response.json();
        return data.routes[0].geometry;
    };

    return (
        <View style={Originstyles.container}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: origin ? origin.latitude : 0,
                    longitude: origin ? origin.longitude : 0,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {origin && <Marker coordinate={origin} />}
                {destination && <Marker coordinate={destination} />}

                {origin && destination && (
                    <MapViewDirections
                        origin={origin}
                        destination={destination}
                        fetchRoute={fetchDirections}
                        strokeWidth={3}
                        strokeColor="hotpink"
                    />
                )}
            </MapView>

            <TouchableOpacity style={Originstyles.backButton} onPress={() => navigation.navigate("Destination")}>
                <Text style={Originstyles.backButtonText}>←</Text>
            </TouchableOpacity>
            <Image source={logo} style={Originstyles.logo1} />
            <Text>Itenerary</Text>
        </View>
    );
}