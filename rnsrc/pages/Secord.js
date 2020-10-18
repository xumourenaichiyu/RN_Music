import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {useHeaderHeight} from 'react-navigation-stack';
const Secord = () => {
  return (
    <ImageBackground
      style={{flex: 1, paddingTop: useHeaderHeight()}}
      source={require('../assets/img/mainBg.png')}>
      <Text>I have a full screen background image</Text>
    </ImageBackground>
  );
};

export default Secord;
