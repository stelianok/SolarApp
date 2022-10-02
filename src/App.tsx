import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import IntroScreen from './screens/IntroScreen';
import OnBoarding from './screens/OnBoarding';

export default function App() {
  return <NavigationContainer>{<OnBoarding />}</NavigationContainer>;
}
