import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, ImageBackground, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header';
import PlanesCard from '../components/PlanesCard';
import { useAirplanes } from '../utils/AirplanesContext';

const Planes = ({ navigation, route }) => {
  const [categoryPlanes, setCategoryPlanes] = useState([]);
  const { removePlane } = useAirplanes();
  const { category, airplanes, title } = route.params;
  // const planes = airplanes[category.title];
  // console.log("Category Title:", category.title);
  // console.log("Airplanes Data:", airplanes);
  // console.log('airplanes', airplanes)
  // console.log('route', route.params)

  useEffect(() => {
    // console.log('refresh2')
    setCategoryPlanes(airplanes);
  }, [airplanes]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background/bgWelcome.jpg')}
        style={styles.background}
      >
      <View style={styles.headerContainer}>
        <Header title={route.params.title} navigation={navigation} showBackButton={true} />
      </View>
      <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
      <TouchableOpacity 
          onPress={() => navigation.navigate("Add", { category })}
        style={styles.addButton}>
          <Text style={{fontWeight: 600, fontSize: 14}}>Add planes</Text>
        </TouchableOpacity> 
      </View>
      <FlatList
          data={categoryPlanes}
          numColumns={1}
          contentContainerStyle={styles.listContent}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PlanesCard planes={item} category={title}/>
          )}
        />
      </ImageBackground>
    </View>
  );
};

export default Planes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  headerContainer: {
    paddingTop: 50,
  },
  listContent: {
    marginTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  addButton: {
    marginTop: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#DA2536',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
  },
});
