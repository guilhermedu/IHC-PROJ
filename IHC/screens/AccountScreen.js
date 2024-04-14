import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from '../styles/AppStyles';


export default function AccountScreen({ route }) {
    const { username } = route.params ? route.params : { username: 'guest' };
    return (
        <View style={styles.container}>
          <Text>Account Page</Text>
          <Text>Welcome, {username}!</Text>
        </View>
      );
}
