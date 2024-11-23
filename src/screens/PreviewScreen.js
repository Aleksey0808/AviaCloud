import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Animated, Easing, useWindowDimensions } from 'react-native';
import Propeller from '../../assets/icons/Propeller';
import * as Updates from "expo-updates";

const PreviewScreen = ({ navigation }) => {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  const rotateValue = new Animated.Value(0);
  const dotsOpacity = new Animated.Value(0);

  async function updatetext() {
    const res = await Updates.checkForUpdateAsync();
    if (res.isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  }

  useEffect(() => {
    updatetext();
  }, [])

  const startPropellerAnimation = () => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const startDotsAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(dotsOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(dotsOpacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    startPropellerAnimation();
    startDotsAnimation();

    const timer = setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  const rotatePropeller = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/background/preview.jpg')} style={styles.background} />
      <Image source={require('../../assets/images/skoke/smokPreview.png')} style={styles.leftImage} />
      <Image source={require('../../assets/images/elements/rays.png')} style={styles.rays} />

      <Animated.View style={[styles.propellerContainer, { transform: [{ rotate: rotatePropeller }] }]}>
        <Propeller />
      </Animated.View>
      <Text style={styles.loadingText}>Loading</Text>
      
      <Animated.Text style={[styles.dotsText, { opacity: dotsOpacity }]}>
        ...
      </Animated.Text>
    </View>
  );
};

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
  },
  leftImage: {
    position: 'absolute',
    top: '10%',
    left: 0,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  rays: {
    position: 'absolute',
    top: -20,
    left: -7,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  loadingText: {
    position: 'absolute',
    bottom: '10%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  dotsText: {
    position: 'absolute',
    bottom: '10%',
    left: '60%', 
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  propellerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
});

export default PreviewScreen;
