import React, { useState } from 'react';
import profilePic from './assets/icon.png';
import { ScrollView,Text,StyleSheet, TextInput, View, Image, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
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
        driver: {
          name: 'Adrego da Rocha',
          imageUrl: profilePic,
          rating: 4.5
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
        driver: {
          name: 'Sr Engenheiro',
          imageUrl: profilePic,
          rating: 4.8
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

function ResultsScreen({ route }) {
  const { results } = route.params;

  return (
    <View style={resultsStyles.container}>
      <ScrollView contentContainerStyle={resultsStyles.scrollView}>
        {results.map((trip, index) => (
          <TripCard key={index} trip={trip} />
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
function TripCard({ trip }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('TripDetail', { trip })}>
    <View style={resultsStyles.card}>
      <View style={resultsStyles.header}>
        <Text style={resultsStyles.headerTextCentered}>{trip.from} -> {trip.to}</Text>
        <Text style={resultsStyles.headerTextCentered}>{trip.day}</Text>
      </View>
      <View style={resultsStyles.timeline}>
        <Text style={resultsStyles.time}>{trip.startTime}</Text>
        <View style={resultsStyles.line}>
          <View style={[resultsStyles.dot, resultsStyles.firstDot]}></View>
          <View style={resultsStyles.lineFill}></View>
          <View style={[resultsStyles.dot, resultsStyles.lastDot]}></View>
        </View>
        <Text style={resultsStyles.time}>{trip.endTime}</Text>
      </View>
      <View style={resultsStyles.driverAndPassengerInfo}>
        <View style={resultsStyles.driverInfo}>
          <Image source={typeof trip.driver.imageUrl === 'string' ? { uri: trip.driver.imageUrl } : trip.driver.imageUrl} style={resultsStyles.driverImage} />
          <View style={resultsStyles.driverDetails}>
            <Text style={resultsStyles.driverName}>{trip.driver.name}</Text>
            <Text style={resultsStyles.rating}><Ionicons name="star" size={16} color="#ffd700" /> {trip.driver.rating}</Text>
          </View>
        </View>
        <View style={resultsStyles.passengerInfo}>
          <Text style={resultsStyles.passengerText}>{trip.passengers} Passengers</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
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
  card: {
      backgroundColor: '#FFF',
      padding: 20,
      marginVertical: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      elevation: 3,
      width: '90%',
      alignSelf: 'center',
  },
  header: {
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
  },
  headerTextCentered: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center'
  },
  timeline: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10,
  },
  time: {
      fontSize: 16,
      color: '#333',
  },
  line: {
    flex: 1,
    flexDirection: 'row',
    height: 1,
    backgroundColor: 'transparent', // Making sure the line background doesn't interfere
    marginHorizontal: 10,
    alignItems: 'center', // Ensures vertical centering
    position: 'relative', // Important for absolute positioning of the dots
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: 'red',
    borderRadius: 4,
    position: 'absolute', // Positioning absolutely within the parent container
  },
  line: {
      flex: 1,
      flexDirection: 'row',
      height: 1,
      backgroundColor: '#ccc',
      marginHorizontal: 10,
      position: 'relative', // Essential for absolute positioning of the dots
      alignItems: 'center',
  },
  firstDot: {
      left: 0, // Align this dot to the left edge
      marginTop: -4, // Vertically center the dot
  },
  lastDot: {
      right: 0, // Align this dot to the right edge
      marginTop: -4, // Vertically center the dot
  },
  driverAndPassengerInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',  
      width: '100%',  
  },
  driverInfo: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  driverImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
  },
  driverDetails: {
      flexDirection: 'column',
      justifyContent: 'center',
  },
  driverName: {
      fontSize: 16,
      fontWeight: 'bold',
  },
  rating: {
      fontSize: 16,
      color: '#ffd700',
  },
  passengerInfo: {
      // This style is for the container of the passenger count text
      marginLeft: 5,  // Adjust this as needed to position the passenger count text appropriately
  },
  passengerText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#666',
  },
});

