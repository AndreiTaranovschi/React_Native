/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import Main from './src/Screens/Main/index';
const App = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default App;
