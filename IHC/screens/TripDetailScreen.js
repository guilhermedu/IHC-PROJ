import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from '../styles/AppStyles';

export default function TripDetailScreen({ navigation }) {
    const { trip } = route.params;
    return ( 
        <View style={detailStyles.container}>
                <Text style={detailStyles.headerTextCentered}>{trip.date}</Text>
                <View style={detailStyles.card}>
                    <Text style={detailStyles.detailText}>Starts: {trip.startTime} at {trip.startLocation}</Text>
                    <View style={detailStyles.verticalDotsLine}>
                        <View style={detailStyles.dot}></View>
                        <View style={{ height: 50, width: 1, backgroundColor: '#ccc' }}></View>
                        <View style={detailStyles.dot}></View>
                    </View>
                    <Text style={detailStyles.detailText}>Ends: {trip.endTime} at {trip.endLocation}</Text>
                    <View style={detailStyles.horizontalLine} />
                    <Text style={detailStyles.detailText}>Price per Person: {trip.price}</Text>
                    <View style={detailStyles.horizontalLine} />
                    <View style={detailStyles.iconRow}>
                        <Ionicons name="car" size={24} />
                        <Text style={detailStyles.detailText}>{trip.driver.car} {trip.driver.matricula}</Text>
                    </View>
                    <View style={detailStyles.iconRow}>
                        <Image source={peticon} style={detailStyles.icon} />
                        <Text style={detailStyles.detailText}>Pet Friendly: {trip.driver.animais}</Text>
                    </View>
                    <View style={detailStyles.iconRow}>
                        <Image source={smokeicon} style={detailStyles.icon} />
                        <Text style={detailStyles.detailText}>Smoking Allowed: {trip.driver.fumar}</Text>
                    </View>
                    <View style={detailStyles.iconRow}>
                        <Image source={bookicon} style={detailStyles.icon} />
                        <Text style={detailStyles.detailText}>Reservation Needed: {trip.driver.reserva}</Text>
                    </View>
                    <View style={detailStyles.driverInfo}>
                        <Image source={driverpfp} style={detailStyles.driverImage} />
                        <Text style={detailStyles.driverName}>{trip.driver.name}</Text>
                        <Ionicons name="arrow-forward" size={24} color="black" onPress={() => navigation.navigate('DriverProfile', { driverId: trip.driver.id })} />
                    </View>
                    <Button title="Book Reservation" onPress={() => {/* Handle reservation logic here */}} style={detailStyles.reservationButton} />
                </View> 
        </View>
    );
}
