import styled from 'styled-components';

export const Colors = {
    primary: '#ffffff',
    yelow: '#e9bd1f'
  };

export const GamesContainer = styled.View`
  width: 100%;
  align-items: center;
  background-color: ${Colors.primary};
`;

export const GamesRectangle = styled.View`
  width: 200px;
  height: 50px;
  background-color: ${Colors.yelow};
  justify-content: center;
  border-radius: 5px;
`;

export const NewGamesText = styled.Text`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  color: #000000;
`;