import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Home from './screens/Home';

export default function App() {
  return <NavigationContainer>{<Home />}</NavigationContainer>;
}
