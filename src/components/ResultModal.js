import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ResultModal = ({ visible, correctAnswers, totalQuestions, onClose, onPlayAgain }) => {
  const isWin = correctAnswers === totalQuestions;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image
            source={isWin ? require('../../assets/images/elements/create_job.png') : require('../../assets/images/elements/game_over.png')}
            style={styles.image}
          />

          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onPlayAgain}>
            <Text style={styles.buttonText}>Play Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ResultModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000080',
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: '60%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    backgroundColor: '#DA2536',
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
