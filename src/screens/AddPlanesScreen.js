import React, { useState, useEffect } from 'react';
import { StyleSheet, ImageBackground, View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Header from '../components/Header';
import { useAirplanes } from '../utils/AirplanesContext';

const AddPlanesScreen = ({ navigation, route }) => {
  const { category, planes } = route.params; 
  const { addPlane, editPlane } = useAirplanes();
  
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

  const handleSave = () => {
    if (planeName && planeSpeed && planeRange) {
      const newPlane = {
        id: planes ? planes.id : Date.now(), 
        title: planeName,
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
      Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <ImageBackground
        source={require('../../assets/images/background/bgWelcome.jpg')}
        style={styles.background}
      >
        <View style={styles.headerContainer}>
          <Header title={planes ? "Редактировать Самолет" : "Добавить Самолет"} navigation={navigation} showBackButton={true} />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.title}>{planes ? "Редактировать" : "Добавить"} Самолет</Text>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Название самолета:</Text>
            <TextInput
              style={styles.input}
              value={planeName}
              onChangeText={setPlaneName}
              placeholder="Введите название"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Скорость:</Text>
            <TextInput
              style={styles.input}
              value={planeSpeed}
              onChangeText={setPlaneSpeed}
              placeholder="Введите скорость"
              placeholderTextColor="#ccc"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Радиус действия:</Text>
            <TextInput
              style={styles.input}
              value={planeRange}
              onChangeText={setPlaneRange}
              placeholder="Введите радиус"
              placeholderTextColor="#ccc"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Тип:</Text>
            <TextInput
              style={styles.input}
              value={planeType}
              onChangeText={setPlaneType}
              placeholder="Введите тип"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Производитель:</Text>
            <TextInput
              style={styles.input}
              value={manufacturer}
              onChangeText={setManufacturer}
              placeholder="Введите производителя"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Вооружение:</Text>
            <TextInput
              style={styles.input}
              value={armament}
              onChangeText={setArmament}
              placeholder="Введите вооружение"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Двигатель:</Text>
            <TextInput
              style={styles.input}
              value={engine}
              onChangeText={setEngine}
              placeholder="Введите двигатель"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Высота службы:</Text>
            <TextInput
              style={styles.input}
              value={serviceC}
              onChangeText={setServiceC}
              placeholder="Введите высоту службы"
              placeholderTextColor="#ccc"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Топливная эффективность:</Text>
            <TextInput
              style={styles.input}
              value={fuelEfficiency}
              onChangeText={setFuelEfficiency}
              placeholder="Введите топливную эффективность"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Размах крыльев:</Text>
            <TextInput
              style={styles.input}
              value={wingspan}
              onChangeText={setWingspan}
              placeholder="Введите размах крыльев"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Роль:</Text>
            <TextInput
              style={styles.input}
              value={role}
              onChangeText={setRole}
              placeholder="Введите роль"
              placeholderTextColor="#ccc"
            />
          </View>

          <View style={styles.inputRow}>
            <Text style={styles.label}>Описание:</Text>
            <TextInput
              style={styles.input}
              value={description}
              onChangeText={setDescription}
              placeholder="Введите описание"
              placeholderTextColor="#ccc"
            />
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Сохранить</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
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
  saveButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
