import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput,Image,Button } from 'react-native';
import {Originstyles } from '../styles/AppStyles';
import MapView,{Marker} from 'react-native-maps';
import * as Location from 'expo-location';

import logo from '../assets/logo.png';


export default function Origin({ navigation }) {
    const [mapRegion,setmapRegion] =useState({
        latitude: 40.636400560338195, 
        longitude: -8.660183343715477,
        latitudeDelta: 3,
        longitudeDelta: 1
    });

    const userLocation = async () =>{
        let {status} = await Location.requestForegroundPermissionsAsync();  
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        setmapRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
        });
        console.log(location.coords.latitude,location.coords.longitude);
    };

    useEffect(() => {
        userLocation();
    },[]);



    return(
        <View style={Originstyles.container}>
            <TouchableOpacity style={Originstyles.backButton} onPress={() => navigation.navigate("Home")}>
                <Text style={Originstyles.backButtonText}>←</Text>
            </TouchableOpacity>
            <Image source={logo} style={Originstyles.logo1} />
            <TextInput
                style={Originstyles.input}
                placeholder="CHOOSE THE ORIGIN"
            />
            <MapView style={Originstyles.map} 
                region={mapRegion} >
                <Marker coordinate={mapRegion} title="Origin" />
            </MapView>
            <TouchableOpacity style={Originstyles.button1} onPress={userLocation}>
                <Text style={Originstyles.buttonText1}>Get Origin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Originstyles.nextButton} onPress={() => navigation.navigate('Destination')}>
                <Text style={Originstyles.backButtonText}>→</Text>
            </TouchableOpacity>
            
       </View>
    )
}




