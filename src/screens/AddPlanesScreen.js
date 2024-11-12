import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import Header from '../components/Header';
import { useAirplanes } from '../utils/AirplanesContext';
import * as ImagePicker from 'expo-image-picker';

const AddPlanesScreen = ({ navigation, route }) => {
  const { category, planes } = route.params; 
  const { addPlane, editPlane } = useAirplanes();
  
  const [planeImage, setPlaneImage] = useState(planes ? planes.img : null);
  const [planeName, setPlaneName] = useState(planes ? planes.title : '');
  const [planeSpeed, setPlaneSpeed] = useState(planes ? planes.MaximumSpeed : '');
  const [planeRange, setPlaneRange] = useState(planes ? planes.Range : '');
  const [planeType, setPlaneType] = useState(planes ? planes.Type : '');
  const [manufacturer, setManufacturer] = useState(planes ? planes.Manufacturer : '');
  const [armament, setArmament] = useState(planes ? planes.Armament : '');
  const [engine, setEngine] = useState(planes ? planes.Engine : '');
  const [serviceC, setServiceC] = useState(planes ? planes.ServiceCeiling : '');
  const [fuelEfficiency, setFuelEfficiency] = useState(planes ? planes.FuelEfficiency : '');
  const [wingspan, setWingspan] = useState(planes ? planes.Wingspan : '');
  const [role, setRole] = useState(planes ? planes.Role : '');
  const [description, setDescription] = useState(planes ? planes.Description : '');

  const selectImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert("Photo permission is required to select an image.");
      return;
    }
  
    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!pickerResult.canceled) {
      setPlaneImage(pickerResult.assets[0].uri);
    }
  };
  

  const handleSave = () => {
    if (planeName && planeSpeed && planeRange) {
      const newPlane = {
        id: planes ? planes.id : Date.now(), 
        title: planeName,
        img: planeImage,
        Type: planeType,
        Manufacturer: manufacturer,
        Armament: armament,
        Engine: engine,
        ServiceCeiling: serviceC,
        FuelEfficiency: fuelEfficiency,
        Wingspan: wingspan,
        Role: role,
        MaximumSpeed: planeSpeed,
        Range: planeRange,
        Description: description,
      };

      if (planes) {
        editPlane(category, newPlane); 
      }

      addPlane(category.title, newPlane); 
      navigation.goBack();
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <ImageBackground
        source={require('../../assets/images/background/bgWelcome.jpg')}
        style={styles.background}
      >
        <View style={styles.headerContainer}>
          <Header title={planes ? "Edit Airplane" : "Add Airplane"} navigation={navigation} showBackButton={true} />
        </View>

        <View style={styles.formContainer}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Image:</Text>
            <TouchableOpacity onPress={selectImage} style={styles.imageSelector}>
              {planeImage ? (
                <Image source={{ uri: planeImage }} style={styles.imagePreview} />
              ) : (
                <Text style={styles.imagePlaceholderText}>Select image</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Aircraft name:</Text>
            <TextInput
              style={styles.input}
              value={planeName}
              onChangeText={setPlaneName}
              placeholder="Enter the name"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Speed:</Text>
            <TextInput
              style={styles.input}
              value={planeSpeed}
              onChangeText={setPlaneSpeed}
              placeholder="Enter speed"
              placeholderTextColor="#ccc"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Range:</Text>
            <TextInput
              style={styles.input}
              value={planeRange}
              onChangeText={setPlaneRange}
              placeholder="Enter the radius"
              placeholderTextColor="#ccc"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Type:</Text>
            <TextInput
              style={styles.input}
              value={planeType}
              onChangeText={setPlaneType}
              placeholder="Enter type"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Manufacturer:</Text>
            <TextInput
              style={styles.input}
              value={manufacturer}
              onChangeText={setManufacturer}
              placeholder="Enter manufacturer"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Armament:</Text>
            <TextInput
              style={styles.input}
              value={armament}
              onChangeText={setArmament}
              placeholder="Bring in the weapons"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Engine:</Text>
            <TextInput
              style={styles.input}
              value={engine}
              onChangeText={setEngine}
              placeholder="Enter the engine"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Height of service:</Text>
            <TextInput
              style={styles.input}
              value={serviceC}
              onChangeText={setServiceC}
              placeholder="Enter the service height"
              placeholderTextColor="#ccc"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Fuel efficiency:</Text>
            <TextInput
              style={styles.input}
              value={fuelEfficiency}
              onChangeText={setFuelEfficiency}
              placeholder="Enter fuel efficiency"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Wingspan:</Text>
            <TextInput
              style={styles.input}
              value={wingspan}
              onChangeText={setWingspan}
              placeholder="Enter wingspan"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Role:</Text>
            <TextInput
              style={styles.input}
              value={role}
              onChangeText={setRole}
              placeholder="Enter role"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Description:</Text>
            <TextInput
            style={[styles.input, styles.textArea]}  
            value={description}
            onChangeText={setDescription}
            placeholder="Enter a description"
            placeholderTextColor="#ccc"
            multiline={true}  
          />
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default AddPlanesScreen;

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
    padding: 10,
  },
  headerContainer: {
    paddingTop: 50,
  },
  formContainer: {
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 20,
  },
  inputRow: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  textArea: {
    height: 120, 
    textAlignVertical: 'top', 
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageSelector: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 150,
    marginTop: 10,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  imagePlaceholderText: {
    color: '#ccc',
    fontSize: 16,
  },
});
