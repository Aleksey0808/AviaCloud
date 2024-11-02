import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ category, onPress }) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Info", category)}>
      <Image source={category.img} style={styles.image} />
      <Text style={styles.title}>{category.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 175,
    height: 130,
    margin: 8,
    backgroundColor: '#383b3b',
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
    marginBottom: 'auto',
    width: '100%',
    height: 100,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFFFFF',
  },
});

export default CategoryCard;
