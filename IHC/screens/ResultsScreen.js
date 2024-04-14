import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import styles from '../styles/AppStyles';

export default function ResultsScreen({ navigation }) {
    const { results } = route.params;

    return (
      <View style={resultsStyles.container}>
        <ScrollView contentContainerStyle={resultsStyles.scrollView}>
          {results.map((trip, index) => (
            <TripCard key={index} trip={trip} navigation={navigation} />
          ))}
        </ScrollView>
      </View>
    ); 
}
