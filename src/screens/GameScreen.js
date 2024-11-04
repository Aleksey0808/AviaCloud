import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Header from '../components/Header';
import ResultModal from '../components/ResultModal'; 
import { quizData } from '../helpers/quizData';

const GameScreen = ({ navigation, route }) => {
//   const questions = route.params.questions;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showModal, setShowModal] = useState(false);
  
  const handleAnswerPress = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowModal(true);
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];
  const progress = (correctAnswers / quizData.length) * 100;

  return (
    <View style={styles.container}>
      <Header title="Aviation Quiz" navigation={navigation} showBackButton={true} />

      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>

      <Text style={styles.questionText}>{currentQuestion.question}</Text>

      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.answerCard}
          onPress={() => handleAnswerPress(option === currentQuestion.correctAnswer)}
        >
          <Text style={styles.answerText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => handleAnswerPress(true)}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>

      <ResultModal visible={showModal} correctAnswers={correctAnswers} totalQuestions={quizData.length} onClose={() => setShowModal(false)} />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a1a',
  },
  progressBarContainer: {
    height: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    marginVertical: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: 'red',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 20,
  },
  answerCard: {
    backgroundColor: '#2a2a2a',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  answerText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#e60000',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
