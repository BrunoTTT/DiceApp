import styled from 'styled-components';


// colors
export const Colors = {
  primary: '#ffffff',
  yelow: '#e9bd1f'
};

const { primary, yelow } = Colors;

export const QuestContainer = styled.View`
  padding: 10px;
  background-color: ${Colors.primary};
  margin-bottom: 100px;
`;

export const QContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const QuestionsQuiz = styled.View`
  width: 350px;
  height: 200px;
  background-color: white;
  border-color: black;
  border-width: 1px;
  border-radius: 10px;
  align-items: center;
  margin-top: 5px;
`;

export const QuestionsText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const AnswerContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

export const QuizContainer = styled.View`
  width: 100%;
  align-items: center;
  background-color: ${Colors.primary};
`;

export const QuizRectangle = styled.View`
  width: 150px;
  height: 50px;
  background-color: ${Colors.yelow};
  justify-content: center;
  border-radius: 5px;
`;

export const QuizText = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: #000000;
`;
