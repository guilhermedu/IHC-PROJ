import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Cdaystyles } from '../styles/AppStyles';

import logo from '../assets/logo.png';


export default function ChooseDay() {
  const [selected, setSelected] = useState('');
  const [hour, setHour] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: '#fff' }}>
      <TouchableOpacity style={Cdaystyles.backButton} onPress={() => navigation.navigate("Itenerary")}>
          <Text style={Cdaystyles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Image source={logo} style={Cdaystyles.logo1} />

      <Text style={Cdaystyles.title}>Choose Day</Text>

      <Calendar 
      onDayPress={day => {
        setSelected(day.dateString);}}
        style={{
          alignSelf: 'center',
          borderWidth: 3,
          borderColor: 'gray',
          width: 350,
          height: 350,
          borderRadius: 25,
        }}
        markedDates={{
          [selected]: {selected: true, disableTouchEvent: true, selectedColor: 'orange'}
        }}
        theme={{
          arrowColor: '#33afb5',
          todayTextColor: '#33afb5', 
        }} />

      <Text style={Cdaystyles.title}>Choose Hour</Text>

      <TextInput
        style={{height: 50, borderColor: 'gray', borderWidth: 3, borderRadius: 10, width: 150, textAlign: 'center', alignSelf: 'left', marginLeft: 35}}
        onChangeText={text => setHour(text)}
        value={hour}
        placeholder="Enter hour"
        keyboardType="numeric"
      />

      <Text style={Cdaystyles.title}>Choose Max. Passengers</Text>

      <TextInput
        style={{height: 50, borderColor: 'gray', borderWidth: 3, borderRadius: 10, width: 150, textAlign: 'center', alignSelf: 'left', marginLeft: 35}}
        onChangeText={text => setHour(text)}
        value={hour}
        placeholder="Enter hour"
        keyboardType="numeric"
      />

      <Text style={Cdaystyles.title}>Choose Passenger Price</Text>

      <TextInput
        style={{height: 50, borderColor: 'gray', borderWidth: 3, borderRadius: 10, width: 150, textAlign: 'center', alignSelf: 'left', marginLeft: 35}}
        onChangeText={text => setHour(text)}
        value={hour}
        placeholder="Enter hour"
        keyboardType="numeric"
      />
      
      <Text style={Cdaystyles.title}>sí para ver se scrolla</Text>

      <TextInput
        style={{height: 50, borderColor: 'gray', borderWidth: 3, borderRadius: 10, width: 150, textAlign: 'center', alignSelf: 'left', marginLeft: 35}}
        onChangeText={text => setHour(text)}
        value={hour}
        placeholder="Enter hour"
        keyboardType="numeric"
      />

    </View>
  );
}