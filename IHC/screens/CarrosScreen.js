import React from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import {CarrosScreenstyles} from '../styles/AppStyles';
import logo from '../assets/logo.png';
import renault from '../assets/Renault.png';

export default function CarrosScreen({navigation}) {
  return (
    <View style={CarrosScreenstyles.container}>
      <TouchableOpacity style={CarrosScreenstyles.backButton} onPress={() => navigation.navigate("Account")}>
        <Text style={CarrosScreenstyles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Image source={logo} style={CarrosScreenstyles.logo1} />
      <Text style={CarrosScreenstyles.title}>Veículos</Text>
      <TouchableOpacity style={CarrosScreenstyles.button}  >
           <Text style={CarrosScreenstyles.buttonText}>Modelo:RENAULT CLIO</Text>
           <Text style={CarrosScreenstyles.buttonText}>Matrícula:33-ZG-66</Text>
            <Text style={CarrosScreenstyles.buttonText}>Combustível:Gasolina</Text>
            <Text style={CarrosScreenstyles.buttonText}>Ano:2017</Text>
          <Image source={renault} style={CarrosScreenstyles.carro1} />
      </TouchableOpacity>
        
    </View>
  );
}
