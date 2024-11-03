import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const InfoPlanes = ({ route }) => {
  const { plane } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={plane.img} style={styles.image} />
      <Text style={styles.title}>{plane.title}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Maximum Speed:</Text>
        <Text style={styles.value}>{plane.MaximumSpeed} km/h</Text>
        
        <Text style={styles.label}>Fuel Efficiency:</Text>
        <Text style={styles.value}>{plane.FuelEfficiency} liters</Text>
        
        <Text style={styles.label}>Wingspan:</Text>
        <Text style={styles.value}>{plane.Wingspan}</Text>

        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{plane.Description}</Text>
      </View>
    </ScrollView>
  );
};

export default InfoPlanes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 200, // Adjust as necessary
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
    color: '#333',
  },
  infoContainer: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  value: {
    fontSize: 16,
    marginBottom: 12,
    color: '#555',
  },
});
