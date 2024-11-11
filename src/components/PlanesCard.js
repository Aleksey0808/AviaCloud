import React, {useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Fuel from '../../assets/icons/Fuel';
import Max from '../../assets/icons/Max';
import UpTo from '../../assets/icons/UpTo';

const PlanesCard = ({ planes }) => {
  const { title, Description, img, MaximumSpeed, FuelEfficiency, Wingspan } = planes;
  const navigation = useNavigation();

  useEffect(() => {
    console.log('refresh3')
 
  }, [planes]);

  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Info", { plane: planes })}>
      <Image source={img} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <UpTo />
            {/* <Text>Up to {Wingspan.substring(0, 4)}</Text> */}
          </View>
          <View style={styles.infoItem}>
            <Fuel />
            {/* <Text>{FuelEfficiency.substring(0, 4)} liters</Text> */}
          </View>
          <View style={styles.infoItem}>
            <Max />
            <Text>Max {MaximumSpeed.substring(0, 4)} km/h</Text>
          </View>
        </View>
        <Text style={styles.description} numberOfLines={3}>{Description}</Text>
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
  description: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
