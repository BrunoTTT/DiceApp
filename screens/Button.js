import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const images = [
  require('./../assets/icon/home.png'),
  require('./../assets/icon/menu.png'),
  require('./../assets/icon/speech-bubble.png'),
  require('./../assets/icon/menu.png'),
];

const Button = () => {
  const navigation = useNavigation();

  const handleButtonPress = (index) => {
    if (index === 2) {
      navigation.navigate('Questions');
    } 
    if (index === 1) {
      navigation.navigate('ScrolPage');
    }else {
      console.log(`Button ${index+1} pressed`);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleButtonPress(index)}>
            <Image source={image} style={styles.buttonImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: 100,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderTopColor: 'gray',
    borderBottomColor: 'rgba(128, 128, 128, 0.5)',
    borderBottomWidth: 4,
    borderTopColor: 'gray',
    borderTopWidth: 5,
  },
  buttonImage: {
    width: 50,
    height: 50,
  },
});

export default Button;
