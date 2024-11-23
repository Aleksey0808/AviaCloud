import React from 'react';
import { StyleSheet, ImageBackground, View, Text, TouchableOpacity, Linking } from 'react-native';
import Header from '../components/Header';

const SettingScreen = ({ navigation }) => {
 
  const handleTermsPress = () => {
    Linking.openURL('https://racketstep.click/aviacloud-terms');
  };

  const handlePrivacyPress = () => {
    Linking.openURL('https://racketstep.click/alviacloud-policy');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background/bgWelcome.jpg')}
        style={styles.background}
      >
        <View style={styles.headerContainer}>
          <Header title="Settings" navigation={navigation} showBackButton={true} />
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={handleTermsPress}>
            <Text style={styles.buttonText}>Terms of Use</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePrivacyPress}>
            <Text style={styles.buttonText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </View>
  );
};

export default SettingScreen;

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
  buttonsContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  button: {
    height: 60,
    width: '80%', 
    backgroundColor: '#DA2536',
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 40, 
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
