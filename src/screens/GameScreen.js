import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, FlatList } from 'react-native';
import { BlurView } from 'expo-blur';
import Header from '../components/Header';
import ResultModal from '../components/ResultModal'; 
import { quizData } from '../helpers/quizData';

const GameScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerPress = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowModal(true);
    }
  };

  const currentQuestion = quizData[currentQuestionIndex];
  const progress = (correctAnswers / quizData.length) * 100;

  return (
    <ImageBackground
      source={require('../../assets/images/background/bgWelcome.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Header title="Aviation Quiz" navigation={navigation} showBackButton={true} />

        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>

        <Text style={styles.questionText}>{currentQuestion.question}</Text>

        <FlatList
          data={currentQuestion.options}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={[
                styles.answerCard,
                selectedAnswer === item && styles.selectedAnswerCard
              ]}
              onPress={() => setSelectedAnswer(item)}
            >
              <BlurView intensity={30} style={styles.blurView} tint="light">
                <Text style={styles.answerText}>{item}</Text>
              </BlurView>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.answersContainer}
          columnWrapperStyle={styles.columnWrapper}
        />

        <TouchableOpacity
          style={[styles.nextButton, !selectedAnswer && styles.disabledButton]}
          onPress={() => handleAnswerPress(selectedAnswer === currentQuestion.correctAnswer)}
          disabled={!selectedAnswer}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        <ResultModal
          visible={showModal}
          correctAnswers={correctAnswers}
          totalQuestions={quizData.length}
          onClose={() => setShowModal(false)}
          onPlayAgain={() => {
            setCurrentQuestionIndex(0);
            setCorrectAnswers(0);
            setShowModal(false);
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 20,
    textAlign: 'center',
  },
  answersContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  columnWrapper: {
    justifyContent: 'center',
    gap: 30,
  },
  answerCard: {
    width: 150,
    height: 120,
    borderRadius: 18,
    overflow: 'hidden', 
    marginBottom: 20,
  },
  blurView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  answerText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  selectedAnswerCard: {
    borderColor: '#DA2536', 
    borderWidth: 2,
  },  
  nextButton: {
    height: 60,
    width: 360,
    backgroundColor: '#DA2536', 
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 30,
    borderRadius: 20,
  },
  disabledButton: {
    backgroundColor: '#7a7a7a',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
