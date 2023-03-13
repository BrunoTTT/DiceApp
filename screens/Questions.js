import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../components/stylesQuestButton';

import {
  QuizContainer,
  QuizRectangle,
  QuizText,
  QuestContainer,
  QContainer,
  QuestionsQuiz,
  QuestionsText,
  AnswerContainer,
} from '../components/QuestStyle';

const Questions = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const navigation = useNavigation(); // Use useNavigation

  const handleOptionPress1 = (option) => {
    setSelectedOption1(option);
  };

  const handleOptionPress2 = (option) => {
    setSelectedOption2(option);
  };

  const renderOption = (optionText, optionLetter, isOptionSelected, handleOptionPress) => {
    return (
      <TouchableOpacity
        onPress={() => handleOptionPress(optionLetter)}
        style={[
          styles.option,
          isOptionSelected && styles.selectedOption,
        ]}
      >
        <Text style={[styles.optionText, isOptionSelected && styles.selectedOptionText]}>
          {optionText}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleResultPress = () => {
    if (selectedOption1 && selectedOption2) {
      console.log('Navigate to Result Page');
      navigation.navigate('ResultPage'); // Navigate to ResultPage
    } else {
      alert('Please select a minimum of 2 options before clicking on Result');
    }
  };


  return (
    <>
      <QuizContainer>
        <QuizRectangle>
          <QuizText>QUIZ</QuizText>
        </QuizRectangle>
      </QuizContainer>
      <ScrollView>
        <QuestContainer>
          <QContainer>
            <QuestionsQuiz>
              <QuestionsText>What is the capital of France?</QuestionsText>
              <AnswerContainer>
                {renderOption('London', 'A', selectedOption1 === 'A', handleOptionPress1)}
                {renderOption('Paris', 'B', selectedOption1 === 'B', handleOptionPress1)}
              </AnswerContainer>
              <AnswerContainer>
                {renderOption('Rome', 'C', selectedOption1 === 'C', handleOptionPress1)}
                {renderOption('Madrid', 'D', selectedOption1 === 'D', handleOptionPress1)}
              </AnswerContainer>
            </QuestionsQuiz>

            <QuestionsQuiz>
              <QuestionsText>What is the capital of Italy?</QuestionsText>
              <AnswerContainer>
                {renderOption('London', 'A', selectedOption2 === 'A', handleOptionPress2)}
                {renderOption('Rome', 'B', selectedOption2 === 'B', handleOptionPress2)}
              </AnswerContainer>
              <AnswerContainer>
                {renderOption('Madrid', 'C', selectedOption2 === 'C', handleOptionPress2)}
                {renderOption('Athens', 'D', selectedOption2 === 'D', handleOptionPress2)}
              </AnswerContainer>
            </QuestionsQuiz>

            <QuestionsQuiz>
              <QuestionsText>What is the capital of Italy?</QuestionsText>
              <AnswerContainer>
                {renderOption('London', 'A', selectedOption2 === 'A', handleOptionPress2)}
                {renderOption('Rome', 'B', selectedOption2 === 'B', handleOptionPress2)}
              </AnswerContainer>
              <AnswerContainer>
                {renderOption('Madrid', 'C', selectedOption2 === 'C', handleOptionPress2)}
                {renderOption('Athens', 'D', selectedOption2 === 'D', handleOptionPress2)}
              </AnswerContainer>
            </QuestionsQuiz>

            <TouchableOpacity
              style={styles.resultButton}
              onPress={handleResultPress}
            >
              <Text style={styles.resultText}>RESULT</Text>
            </TouchableOpacity>
          </QContainer>
        </QuestContainer>
      </ScrollView>
    </>
  );
};

export default Questions;
