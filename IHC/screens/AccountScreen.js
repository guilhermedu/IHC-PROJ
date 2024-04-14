import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AccountScreenStyles } from '../styles/AppStyles';
import logo from '../assets/logo.png';
import fotoperfil from '../assets/marcosilva.png';


export default function AccountScreen({ route }) {
    
    return (
        <View style={AccountScreenStyles.container}>
          <Image source={logo} style={AccountScreenStyles.logo1} />
          <Image source={fotoperfil} style={AccountScreenStyles.fotoperfil} />
          <Text style={AccountScreenStyles.username}>Marco Silva</Text>
          <TouchableOpacity style={AccountScreenStyles.button1}>
          <Text style={AccountScreenStyles.buttonText}>Carros</Text>
          </TouchableOpacity>
          <TouchableOpacity style={AccountScreenStyles.button2}>
          <Text style={AccountScreenStyles.buttonText}>Histórico</Text>
          </TouchableOpacity>
          <TouchableOpacity style={AccountScreenStyles.button3}>
          <Text style={AccountScreenStyles.buttonText}>Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={AccountScreenStyles.button4}>
          <Text style={AccountScreenStyles.buttonText}>Sobre ti</Text>
          </TouchableOpacity>
          
        </View>
      );
}
