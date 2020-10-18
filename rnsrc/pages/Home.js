import React, {Component} from 'react';
import {useHeaderHeight} from 'react-navigation-stack';
import {Text, ImageBackground} from 'react-native';
const Home = () => {
  return (
    <ImageBackground
      style={{flex: 1, paddingTop: useHeaderHeight()}}
      source={require('../assets/img/mainBg.png')}>
      <Text>I have a full screen background image</Text>
    </ImageBackground>
  );
};
export default Home;
