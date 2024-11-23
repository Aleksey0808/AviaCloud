import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, ImageBackground } from 'react-native';
import Header from '../components/Header';

const InfoPlanes = ({ navigation, route }) => {
  const { plane } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <ImageBackground
        source={require('../../assets/images/background/bgWelcome.jpg')}
        style={styles.background}
      >
        <View style={styles.headerContainer}>
          <Header title={plane.title} navigation={navigation} showBackButton={true} />
        </View>
        <View  style={styles.wrapperImg}>
          <Image 
            source={typeof plane.img === 'string' ? { uri: plane.img } : plane.img ? plane.img : require('../../assets/images/default.png')} 
            style={styles.image} 
          />

        </View>
        <Text style={styles.title}>{plane.title}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Type:</Text>
            <Text style={styles.value}>{plane.Type}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Cargo Capacity:</Text>
            <Text style={styles.value}>{plane.CargoCapacity}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Range:</Text>
            <Text style={styles.value}>{plane.Range}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Speed:</Text>
            <Text style={styles.value}>{plane.MaximumSpeed} km/h</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Payload:</Text>
            <Text style={styles.value}>{plane.Payload}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Wingspan:</Text>
            <Text style={styles.value}>{plane.Wingspan}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Engine:</Text>
            <Text style={styles.value}>{plane.Engine}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Max Takeoff Weight:</Text>
            <Text style={styles.value}>{plane.MaxTakeoffWeight}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Fuel Efficiency:</Text>
            <Text style={styles.value}>{plane.FuelEfficiency} liters</Text>
          </View>
        </View>
        <View style={styles.wrapperDescription}>
        <Text style={styles.descriptionLabel}>Description:</Text>
        <Text style={styles.description}>{plane.Description}</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default InfoPlanes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1, 
    justifyContent: 'flex-start', 
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    backgroundColor: '#000', 
    padding: 10,
  },
  headerContainer: {
    paddingTop: 50,
  },
  wrapperImg: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    margin: 8, 
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
    color: '#FFFFFF', 
  },
  infoContainer: {
    padding: 16,
    gap: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginVertical: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
  value: {
    textAlign: 'right',
    width: '50%',
    fontSize: 16,
    color: '#FFFFFF', 
  },
  wrapperDescription: {
    padding: 16,
  },
  descriptionLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#FFFFFF', 
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF', 
    paddingHorizontal: 8, 
  },
});
