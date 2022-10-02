import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import IntroScreen from './screens/IntroScreen';

export default function App() {
  return <NavigationContainer>{<IntroScreen />}</NavigationContainer>;
}
