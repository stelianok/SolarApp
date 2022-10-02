import styled from 'styled-components/native';
import StyleGuide from '../../StyleGuide';
import { RectButton } from 'react-native-gesture-handler';

import StarsSVG from '../../../assets/images/planets/Stars.svg';
import SunWrinkly from '../../../assets/images/OnBoarding/SunWrinkly.svg';
import { Heading2, Heading4 } from '../../GlobalStyles';
export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const StarsContainer = styled.SafeAreaView`
  position: absolute;
`;

export const Stars = styled(StarsSVG)`
  width: 25,
  height: 25,
  `;

export const Background = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${StyleGuide.colors.dark.dark_4};
`;
export const Body = styled.View`
  margin-horizontal: 34px;
  margin-top: 75px;
`;

export const Title = styled(Heading2)`
  color: ${StyleGuide.colors.brand.white};
  text-align: center;
`;

export const Astronomer = styled.Image``;
export const Button = styled(RectButton)``;
export const Row = styled.View`
  flex-direction: row;
`;
export const ButtonText = styled(Heading4)``;
export const WrinklySunIcon = styled(SunWrinkly)`
width: 25,
height: 25,
`;
