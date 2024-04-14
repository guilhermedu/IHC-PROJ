import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from '../styles/AppStyles';
import driverpfp from '../assets/icon.png'



export default function HomeScreen({ navigation }) {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [day, setDay] = useState('');
    const [passengers, setPassengers] = useState('');
  
    const searchTrips = () => {
      const allTrips = [
        {
          startTime: '10:30',
          endTime: '11:00',
          from: 'OVAR',
          to: 'AVEIRO',
          day: 'Monday',
          passengers: '1',
          price: '2,50$',
          duration: '30 mins',
          date: '14/04/2024',
          driver: {
            name: 'Adrego da Rocha',
            imageUrl: driverpfp,
            rating: 4.5,
            car: 'Opel Corsa',
            matricula: 'FF-XX-21',
            animais: 'No-Pets',
            fumar: 'No-Smoke',
            reserva: 'No'
          }
        },
        {
          startTime: '12:00',
          endTime: '12:45',
          from: 'OVAR',
          to: 'AVEIRO',
          day: 'Tuesday',
          passengers: '2',
          price: '3,00$',
          duration: '45 mins',
          date: '24/04/2024',
          driver: {
            name: 'Sr Engenheiro',
            imageUrl: driverpfp,
            rating: 4.8,
            car: 'Opel Corsa',
            matricula: 'FF-XX-21',
            animais: 'No-Pets',
            fumar: 'No-Smoke',
            reserva: 'Yes'
            
          }
        }
      ];
  
      // Filter trips based on user input
      const filteredTrips = allTrips.filter(trip => {
        return trip.from.toLowerCase() === from.trim().toLowerCase() &&
               trip.to.toLowerCase() === to.trim().toLowerCase() &&
               trip.day.toLowerCase() === day.trim().toLowerCase() &&
               trip.passengers === passengers.trim();
      });
  
      navigation.navigate('Results', { from, to, day, passengers, results: filteredTrips });
      
  
    };
  
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="From" value={from} onChangeText={setFrom} />
        <TextInput style={styles.input} placeholder="To" value={to} onChangeText={setTo} />
        <TextInput style={styles.input} placeholder="Day" value={day} onChangeText={setDay} />
        <TextInput style={styles.input} placeholder="Passengers" value={passengers} onChangeText={setPassengers} keyboardType="numeric" />
        <Button title="Search" onPress={searchTrips} />
      </View>
    );
}

