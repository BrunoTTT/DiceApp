import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from './../screens/Logo';
import Questions from './../screens/Questions';
import ResultPage from './../screens/ResultPage';
import Button from './../screens/Button';
import MoreResults from '../screens/MoreResults'
import ScrolPage from '../screens/ScrolPage';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Logo />
      <Stack.Navigator>
        <Stack.Screen name="Questions" component={Questions} options={{ headerMode: 'none' }} />
        <Stack.Screen name="ResultPage" component={ResultPage} options={{ headerMode: 'none' }}/>
        <Stack.Screen name="MoreResults" component={MoreResults} options={{ headerMode: 'none' }}/>
        <Stack.Screen name="ScrolPage" component={ScrolPage} options={{ headerMode: 'none' }}/>
      </Stack.Navigator>
      <Button />
    </NavigationContainer>
  );
};

export default RootStack;
