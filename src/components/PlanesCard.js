import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Fuel from '../../assets/icons/Fuel';
import Max from '../../assets/icons/Max';
import UpTo from '../../assets/icons/UpTo';
import { useAirplanes } from '../utils/AirplanesContext';

const PlanesCard = ({ planes, category }) => {
  const { removePlane } = useAirplanes();
  const { title, Description, img, MaximumSpeed, FuelEfficiency, Wingspan, id } = planes;
  const navigation = useNavigation();

  const handleRemovePlane = (planeId) => {
    removePlane(category, planeId); 
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Info", { plane: planes })}>
    <Image 
      source={typeof img === 'string' ? { uri: img } : img ? img : require('../../assets/images/default.png')} 
      style={styles.image} 
    />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <UpTo />
            <Text style={styles.infoText}>Up to {Wingspan.substring(0, 4)}</Text>
          </View>
          <View style={styles.infoItem}>
            <Fuel />
            <Text style={styles.infoText}>{FuelEfficiency.substring(0, 4)} liters</Text>
          </View>
          <View style={styles.infoItem}>
            <Max />
            <Text style={styles.infoText}>Max {MaximumSpeed.substring(0, 4)} km/h</Text>
          </View>
        </View>
        <Text style={styles.description} numberOfLines={3}>{Description}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 10}}>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemovePlane(id)}
        >
          <Text style={styles.removeButtonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate("Add", { category, planes })}
        >
          <Text style={styles.removeButtonText}>Edit</Text>
        </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PlanesCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    backgroundColor: '#FFFFFF1A',
    borderRadius: 8,
    alignItems: 'center',
    padding: 10,
    opacity: 0.9,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  image: {
    width: '100%',
    height: 150, 
    resizeMode: 'cover',
    borderRadius: 8,
  },
  textContainer: {
    alignItems: 'flex-start',
    width: '100%',
    paddingTop: 8,
    gap: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#FFFFFF',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    width: '100%',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
    fpntWidth: 500,
  },
  description: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: '#DA2536',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: 40,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    height: 40,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
