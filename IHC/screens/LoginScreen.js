import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from '../styles/AppStyles';


export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    function authenticate() {
      if (username === 'admin' && password === '123') {
        navigation.replace('Home');
      } else {
        alert('Incorrect username or password.');
      }
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login Page</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={authenticate} />
      </View>
    );
  
}
