import React from 'react';
import { StyleSheet, Image, ImageBackground, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header';

const HomeScreen = ({ navigation, route }) => {
  console.log(route.params.title)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background/bgWelcome.jpg')}
        style={styles.background}
      >
      <View style={styles.headerContainer}>
        <Header title={route.params.title} navigation={navigation} showBackButton={true} />
      </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  headerContainer: {
    paddingTop: 50,
  },
});
