import React, { useEffect, useState } from 'react';
import { View, Modal, Image, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import { NativeRouter } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigations/AppNavigator';
import { AirplanesProvider } from './src/utils/AirplanesContext';

export default function App() {
    return (
      <AirplanesProvider>
        <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      </AirplanesProvider>
    );
  }