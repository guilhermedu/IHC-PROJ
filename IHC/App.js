import React, { useState } from 'react';

import { ScrollView,Text,StyleSheet, TextInput, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
function LoginScreen({ navigation }) {
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

function HomeScreen({ navigation }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [day, setDay] = useState('');
  const [passengers, setPassengers] = useState('');

  const searchTrips = () => {
    // Fake results data; replace with your actual data logic
    const results = [
      { time: '10:30', from: 'OVAR', price: '2,50$', destination: 'AVEIRO' },
      { time: '11:00', from: 'OVAR', price: '3,00$', destination: 'AVEIRO' }
    ];
    navigation.navigate('Results', { from, to, day, passengers, results });
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

function ResultsScreen({ route }) {
  const { results } = route.params;

  return (
    <View style={resultsStyles.container}>
      <ScrollView contentContainerStyle={resultsStyles.scrollView}>
        {results.map((result, index) => (
          <View key={index} style={resultsStyles.card}>
            <View style={resultsStyles.cardHeader}>
              {/* Check if result.driver and result.driver.imageUrl exist before rendering Image */}
              {result.driver && result.driver.imageUrl ? (
                <Image source={{ uri: result.driver.imageUrl }} style={styles.driverImage} />
              ) : (
                <View style={styles.placeholderImage}></View>  // Placeholder in case there's no image
              )}
              <View style={styles.driverInfo}>
                <Text style={styles.driverName}>{result.driver ? result.driver.name : 'Unknown Driver'}</Text>
                <Text>
                  {result.driver && result.driver.rating}
                  <Ionicons name="star" size={16} color="#ffd700" />
                </Text>
              </View>
            </View>
            <View style={styles.rideInfo}>
              <Text>Start: {result.startTime}</Text>
              <Text>Duration: {result.duration}</Text>
              <Text>End: {result.endTime}</Text>
              <Text>From: {result.from}</Text>
              <Text>To: {result.to}</Text>
              <Text>Price: {result.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}



function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text>Account Page</Text>
    </View>
  );
}

function TripsScreen() {
  return (
    <View style={styles.container}>
      <Text>Your Trips</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Trips') {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === 'Account') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Trips" component={TripsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Results" component={ResultsScreen} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  resultContainer: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  }
});

const resultsStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  scrollView: {
    width: '100%',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  driverImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  driverInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  driverName: {
    fontWeight: 'bold',
  },
  rideInfo: {
    marginTop: 5,
  },
});
