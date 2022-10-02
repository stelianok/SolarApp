import styled from 'styled-components/native';
import StyleGuide from '../../StyleGuide';

import StarsSVG from '../../../assets/images/planets/Stars.svg';
import SunWrinkly from '../../../assets/images/OnBoarding/SunWrinkly.svg';
import { Heading2, Heading4 } from '../../GlobalStyles';
import LinearGradient from 'react-native-linear-gradient';
export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const StarsContainer = styled.SafeAreaView`
  position: absolute;
`;

export const Stars = styled(StarsSVG)`
  width: 32,
  height: 32,
  `;

export const Background = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${StyleGuide.colors.dark.dark_4};
`;
export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin-horizontal: 34px;
  margin-top: 32px;
`;

export const Title = styled(Heading2)`
  color: ${StyleGuide.colors.brand.white};
  text-align: center;
`;

export const Astronomer = styled.Image`
  width: 375px;
  height: 345px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 50px;
  width: 246px;
  height: 45px;
`;

export const LinearGradientBackground = styled(LinearGradient)`
  flex: 1;
  border-radius: 50px;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled(Heading4)`
  color: ${StyleGuide.colors.brand.white};
  margin-right: 15px;
`;
export const WrinklySunIcon = styled(SunWrinkly)`
width: 25,
height: 25,
`;
