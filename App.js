import React from 'react';
import stack from './rnsrc/navigation/appcontainer'
import 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation'
const App = () => {
  const AppContainer = createAppContainer(stack)
  return (
    <AppContainer/>
  );
};

export default App
