import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

import Image1 from '../assets/Images/Image1.png';
import Image2 from '../assets/Images/Image2.png';
import Image3 from '../assets/Images/Image3.png';
import Image4 from '../assets/Images/Image4.png';
import { BaseRouter } from '@react-navigation/native';

const staperHome = [
  {
    id: 1,
    title: 'Plan your tasks to do, that way you’ll stay organized and you won’t skip any',
    icon: Image1,
  },
  {
    id: 2,
    title: 'Make a full schedule for the whole week and stay organized and productive all days',
    icon: Image2,
  },
  {
    id: 3,
    title: 'Create a team task, invite people and manage your work together',
    icon: Image3,
  },
  {
    id: 4,
    title: 'Your information is secure with us',
    icon: Image4,
  },
];

const MainScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % staperHome.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + staperHome.length) % staperHome.length);
  };

  return (
    <View style={styles.container}>
      <Text>Main Screen</Text>
      <View style={styles.slider}>
        <Image source={staperHome[currentIndex].icon} style={styles.image} />
        <Text style={styles.title}>{staperHome[currentIndex].title}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={()=>goToPrevSlide} style={styles.button}>
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>goToNextSlide} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#104993',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    marginTop: 20,
    width: '100%',
    padding: 30,
  },
  button: {
    padding: 10,
    backgroundColor: '#1565C0',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default MainScreen;

