import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { registerStyles, styles } from '../styles/AppStyles';

export default function RegisterScreen({ navigation }) {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmpassword, setComfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function register() {
    if (email === 'MarcoSilva@ua.pt' && password === '1' && comfirmpassword==='1' && phoneNumber ==='961111111') {
      alert('User registered successfully.');
      navigation.replace('Home');
    } else {
      alert('Please fill in all fields.');
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={registerStyles.backButton} onPress={() => navigation.navigate("Login")}>
        <Text style={registerStyles.backButtonText}>←</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setemail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={comfirmpassword}
        onChangeText={setComfirmPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        />
      <TouchableOpacity onPress={register} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}