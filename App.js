import React, { useEffect, useState } from 'react';
import { View, Modal, Image, TouchableOpacity, Text, StyleSheet, } from 'react-native';
import { NativeRouter } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigations/AppNavigator';
import { AirplanesProvider } from './src/utils/AirplanesContext';
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";

export default function App() {
  const getPermission = async () => {
    if (AppState.currentState === "active") {
      await requestTrackingPermissionsAsync();
    } else {
      setTimeout(() => getPermission(), 100);
    }
  };

  useEffect(() => {
    getPermission();
  }, [])
    return (
      <AirplanesProvider>
        <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      </AirplanesProvider>
    );
  }