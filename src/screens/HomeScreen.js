import React from 'react';
import { StyleSheet, Image, ImageBackground, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Header from '../components/Header';
import { airplaneCategories } from '../helpers/airplaneCategories';
import CategoryCard from '../components/CategoryCard';

const HomeScreen = ({ navigation }) => {
  const renderHeader = () => (
    <View>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../../assets/images/background/baner.png')}
          style={styles.mainImage}
        />
        <TouchableOpacity style={styles.bannerButton}>
          <Image 
            source={require('../../assets/images/elements/Play.png')}
            style={styles.imageButton}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.textImageContainer}>
        <Image 
          source={require('../../assets/images/elements/textHome.png')}
          style={styles.textImage}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/background/bgWelcome.jpg')}
        style={styles.background}
      >
        <View style={styles.headerContainer}>
        <Header title="Home" navigation={navigation} />
      </View>
        <FlatList
          data={airplaneCategories}
          numColumns={2}
          contentContainerStyle={styles.listContent}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CategoryCard category={item} />
          )}
          ListHeaderComponent={renderHeader} 
        />
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
  imageContainer: {
    marginTop: 20,
    width: '100%',
    height: 200,
    alignItems: 'center', 
  },
  mainImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  bannerButton: {
    position: 'absolute',
    bottom: 10,
    right: 14,
    padding: 10,
    backgroundColor: '#DA2536',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
  },
  imageButton: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  textImageContainer: {
    alignItems: 'center',
    marginBottom: 20, 
  },
  textImage: {
    width: '60%',
    height: 100,
    resizeMode: 'contain',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
