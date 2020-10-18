/*
 * @Author: your name
 * @Date: 2020-10-11 18:33:49
 * @LastEditTime: 2020-10-18 20:08:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \video\App.js
 */
import React from 'react';
import stack from './rnsrc/navigation/appcontainer';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
const App = () => {
  const AppContainer = createAppContainer(stack);
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <AppContainer />
    </>
  );
};

export default App;
