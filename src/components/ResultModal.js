import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';

const ResultModal = ({ visible, correctAnswers, totalQuestions, onClose, onPlayAgain }) => {
  const navigation = useNavigation();
  const isWin = correctAnswers === totalQuestions;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.modalContainer}>
        <BlurView intensity={50} style={StyleSheet.absoluteFill} tint="dark" />
        <View style={styles.modalContent}>
          <Image
            source={isWin ? require('../../assets/images/elements/create_job.png') : require('../../assets/images/elements/game_over.png')}
            style={styles.image}
          />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onPlayAgain}>
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ResultModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    height: 60,
    width: '100%',
    backgroundColor: '#DA2536',
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 55,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
