import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from '../styles/AppStyles'; // Assuming this path is correct
import driverpfp from '../assets/icon.png';
import logo from '../assets/logo.png';

export default function Search({ navigation }) {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [month, setMonth] = useState('April');
    const [day, setDay] = useState('14');
    const [passengers, setPassengers] = useState('1');

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const days = Array.from({ length: 31 }, (_, index) => (index + 1).toString());

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
                    name: 'Carlos Silva',
                    imageUrl: driverpfp,
                    rating: 4.3,
                    car: 'Opel Corsa',
                    matricula: 'ZZ-XX-21',
                    animais: 'No-Pets',
                    fumar: 'No-Smoke',
                    reserva: 'Yes'
                }
            }
        ];

        const formatDate = (day, month, year) => {
            const zeroPad = (num, places) => String(num).padStart(places, '0');
            return `${zeroPad(day, 2)}/${zeroPad(month, 2)}/${year}`;
        };

        const formattedDate = formatDate(day, months.indexOf(month) + 1, 2024);

        const filteredTrips = allTrips.filter(trip => {
            return trip.from.toLowerCase() === from.trim().toLowerCase() &&
                   trip.to.toLowerCase() === to.trim().toLowerCase() &&
                   trip.date === formattedDate &&
                   trip.passengers === passengers.trim();
        });

        navigation.navigate('Results', { from, to, day, passengers, results: filteredTrips });
    };

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo1} />
            <TextInput style={styles.input} placeholder="From" value={from} onChangeText={setFrom} />
            <TextInput style={styles.input} placeholder="To" value={to} onChangeText={setTo} />

            <View style={styles.inputPicker}>
                <Picker
                    selectedValue={month}
                    style={styles.picker}
                    onValueChange={(itemValue) => setMonth(itemValue)}
                >
                    {months.map((monthItem, index) => (
                        <Picker.Item key={index} label={monthItem} value={monthItem} />
                    ))}
                </Picker>
            </View>
            <View style={styles.inputPicker}>
                <Picker
                    selectedValue={day}
                    style={styles.picker}
                    onValueChange={(itemValue) => setDay(itemValue)}
                >
                    {days.map((dayItem, index) => (
                        <Picker.Item key={index} label={dayItem} value={dayItem} />
                    ))}
                </Picker>
            </View>

            <TextInput style={styles.input} placeholder="Passengers" value={passengers} onChangeText={setPassengers} keyboardType="numeric" />
            <TouchableOpacity onPress={searchTrips} style={styles.button}>
                <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
        </View>
    );
}