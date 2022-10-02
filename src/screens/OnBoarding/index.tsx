import React from 'react';

import FirstBoard from './FirstBoard';
import SecondBoard from './SecondBoard';
import ThirdBoard from './ThirdBoard';
import FourthBoard from './FourthBoard';

import Swiper from 'react-native-swiper';
import StyleGuide from '../../StyleGuide';
import {View} from 'react-native';
import {Dot} from './styles';

export default function OnBoarding() {
  return (
    <Swiper
      activeDotColor={StyleGuide.colors.brand.blue}
      dot={<Dot />}
      style={{}}>
      <FirstBoard />
      <SecondBoard />
      <ThirdBoard />
      <FourthBoard />
    </Swiper>
  );
}
