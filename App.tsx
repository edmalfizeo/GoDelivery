import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Home from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Home />
    </SafeAreaView>
  );
};

export default App;
