import React from 'react';
import { StyleSheet, Image, ImageBackground, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header';
import PlanesCard from '../components/PlanesCard';

const Planes = ({ navigation, route }) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background/bgWelcome.jpg')}
        style={styles.background}
      >
      <View style={styles.headerContainer}>
        <Header title={route.params.title} navigation={navigation} showBackButton={true} />
      </View>
      <FlatList
          data={route.params.airplanes}
          numColumns={1}
          contentContainerStyle={styles.listContent}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PlanesCard planes={item}/>
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
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
