import React from 'react';

import FirstBoard from './FirstBoard';
import SecondBoard from './SecondBoard';
import ThirdBoard from './ThirdBoard';
import FourthBoard from './FourthBoard';

import Swiper from 'react-native-swiper';

export default function OnBoarding() {
  return (
    <Swiper style={{}}>
      <FirstBoard />
      <SecondBoard />
      <ThirdBoard />
      <FourthBoard />
    </Swiper>
  );
}
