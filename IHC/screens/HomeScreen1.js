import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { HomeScreenStyles } from '../styles/AppStyles';  // Make sure your styles are correctly imported
import logo from '../assets/logo.png';
export default function HomeScreen1({ navigation }) {
    return (
        <View style={HomeScreenStyles.container}>
             <Image source={logo} style={HomeScreenStyles.logo} />
            <TouchableOpacity style={HomeScreenStyles.button} onPress={() => navigation.navigate('AddRide')}>
                <Text style={HomeScreenStyles.buttonText}>Add Ride</Text>
            </TouchableOpacity>
            <TouchableOpacity style={HomeScreenStyles.button2} onPress={() => navigation.navigate('Home')}>
                <Text style={HomeScreenStyles.buttonText}>Search Ride</Text>
            </TouchableOpacity>
        </View>
    );
}
