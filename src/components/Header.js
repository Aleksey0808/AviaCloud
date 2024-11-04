
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import Setting from '../../assets/icons/Setting';
import Back from '../../assets/icons/Back';

const Header = ({ title, navigation, showBackButton }) => {

  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Back /> 
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {!showBackButton && (
        <TouchableOpacity onPress={() => navigation.navigate('Setting')} style={styles.settingsButton}>
          <Setting /> 
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    elevation: 4, 
    zIndex: 10,
    borderBottomWidth: 2,  
    borderBottomColor: '#8e8f8f',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    color: '#fff',
    textAlign: 'center',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 15,
    backgroundColor: '#FFFFFF1A', 
    borderRadius: 25, 
    padding: 5, 
    height: 45,
    width: 45,
    hitSlop: { top: 30, bottom: 30, left: 30, right: 30 },
    zIndex: 50,
  },
  settingsButton: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#FFFFFF1A', 
    borderRadius: 25, 
    padding: 5, 
  },
});

