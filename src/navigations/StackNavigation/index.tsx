import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../../screens/IntroScreen';
import OnBoarding from '../../screens/OnBoarding';
import MainBottomTabNavigation from '../MainBottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Introduction" component={IntroScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="MainTabs" component={MainBottomTabNavigation} />
    </Stack.Navigator>
  );
}
