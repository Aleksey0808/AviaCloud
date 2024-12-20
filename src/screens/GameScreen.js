import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ImageBackground, 
  FlatList, 
  Dimensions, 
  Image,
  Platform 
} from 'react-native';
import { BlurView } from 'expo-blur';
import Header from '../components/Header';
import ResultModal from '../components/ResultModal'; 
import { quizData } from '../helpers/quizData';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');

const GameScreen = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const storedIndex = await AsyncStorage.getItem('currentQuestionIndex');
        const storedCorrectAnswers = await AsyncStorage.getItem('correctAnswers');
        if (storedIndex !== null) {
          setCurrentQuestionIndex(parseInt(storedIndex, 10));
        }
        if (storedCorrectAnswers !== null) {
          setCorrectAnswers(parseInt(storedCorrectAnswers, 10));
        }
      } catch (error) {
        console.error("Error loading progress: ", error);
      }
    };

    loadProgress();
  }, []);

  const handleAnswerPress = async (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
    }

    await AsyncStorage.setItem('currentQuestionIndex', (currentQuestionIndex + 1).toString());
    await AsyncStorage.setItem('correctAnswers', correctAnswers.toString());

    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowModal(true);
      await AsyncStorage.removeItem('currentQuestionIndex');
      await AsyncStorage.removeItem('correctAnswers');
    }
  };

  const handleResetProgress = async () => {
    await AsyncStorage.removeItem('currentQuestionIndex');
    await AsyncStorage.removeItem('correctAnswers');
  };

  const currentQuestion = quizData[currentQuestionIndex];
  const progress = (correctAnswers / quizData.length) * 100;

  return (
    <ImageBackground
      source={require('../../assets/images/background/bgWelcome.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
      <Image source={require('../../assets/images/skoke/smokeGame.png')} style={styles.smokeBottom} />
         <View style={styles.headerContainer}>
            <Header title="Aviation Quiz" navigation={navigation} showBackButton={true} />
        </View>
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
                {Platform.OS === 'ios' ? (
                  <BlurView intensity={30} style={styles.blurView} tint="light">
                    <Text style={styles.answerText}>{item}</Text>
                  </BlurView>
                ) : (
                  <View style={styles.alternativeBackground}>
                    <Text style={styles.answerText}>{item}</Text>
                  </View>
              )}
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.answersContainer}
          columnWrapperStyle={styles.columnWrapper}
        />

        <TouchableOpacity
          style={[styles.nextButton, !selectedAnswer && styles.disabledButton]}
          onPress={() => handleAnswerPress(selectedAnswer === currentQuestion.answer)}
          disabled={!selectedAnswer}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

        <ResultModal
          visible={showModal}
          correctAnswers={correctAnswers}
          totalQuestions={quizData.length}
          onClose={() => {
            setShowModal(false);
            handleResetProgress(); 
          }}
          onPlayAgain={() => {
            setCurrentQuestionIndex(0);
            setCorrectAnswers(0);
            setShowModal(false);
            handleResetProgress(); 
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
  headerContainer: {
    paddingTop: 50,
    marginBottom: 20,
  },
  progressBarContainer: {
    height: 15,
    backgroundColor: '#000', 
    borderRadius: 15,
    marginVertical: 10,
    overflow: 'hidden',
    width: '100%', 
    shadowColor: '#000', 
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5, 
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
    width: width * 0.4,
    height: width * 0.3,
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
  alternativeBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
  smokeBottom: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: '80%',
    resizeMode: 'stretch',
  },
});
