import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({navigation}) => {
  const [cloudImage, setCloudImage] = useState(require('../../assets/images/elements/cloud1.png')); 
  const [clickCount, setClickCount] = useState(0);

  const handleButtonPress = () => {
    setClickCount((prevCount) => prevCount + 1); 

    if (clickCount === 0) {
      setCloudImage(require('../../assets/images/elements/cloud2.png')); 
    } else if (clickCount === 1) {
      setCloudImage(require('../../assets/images/elements/cloud3.png')); 
    } else if (clickCount === 2) {
      navigation.navigate("Home"); 
    }
  };

  const getPersonStyle = () => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '80%',
    resizeMode: 'stretch',
    zIndex: clickCount === 0 ? 10 : 0, 
  });

  const getSmoketyle = () => ({
    position: 'absolute',
    top: 0,  
    right: 0, 
    width: clickCount === 0 ? '140%' : '180%',
    height: clickCount === 0 ? '40%' : '60%',
    resizeMode: 'stretch', 
  });
 
 
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/background/bgWelcome.jpg')} style={styles.background} />
      <Image source={require('../../assets/images/elements/person.png')} style={getPersonStyle()} />
      <Image source={require('../../assets/images/skoke/smokeWelcome.png')} style={getSmoketyle()} />
      <Image source={require('../../assets/images/skoke/BottomsmokeWelcome.png')} style={styles.smokeBottom} />
      <Image source={cloudImage} style={styles.cloud1} />

      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    background: {
      ...StyleSheet.absoluteFillObject,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    cloud1: {
      position: 'absolute',
      top: -140,  
      right: 30, 
      width: '70%',
      height: '70%',
      resizeMode: 'contain', 
    },
    smokeBottom: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: '100%',
      height: '80%',
      resizeMode: 'stretch',
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      width: 360,
      marginTop: 'auto', 
      marginBottom: 30,
      backgroundColor: '#DA2536', 
      paddingVertical: 15, 
      // paddingHorizontal: 40,
      borderRadius: 25, 
      zIndex: 20,
    },
    buttonText: {
      color: '#fff', 
      fontSize: 18, 
      textAlign: 'center', 
    },
  });