import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PreviewScreen from '../screens/PreviewScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import Planes from '../screens/Planes';
import InfoPlanes from '../screens/InfoPlanes';
import GameScreen from '../screens/GameScreen';
import SettingScreen from '../screens/SettingScreen';
import AddPlanesScreen from '../screens/AddPlanesScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Preview" component={PreviewScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Planes" component={Planes} />
      <Stack.Screen name="Info" component={InfoPlanes} />
      <Stack.Screen name="Game" component={GameScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="Add" component={AddPlanesScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;