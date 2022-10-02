import styled from 'styled-components/native';
import { Heading2, Heading3, Heading4 } from '../../../GlobalStyles';

import { Dimensions } from 'react-native';

import StarsSVG from '../../../../assets/images/StarsBackMobile.svg';
import WrinklySunSVG from '../../../../assets/images/OnBoarding/SunWrinkly.svg';

import StyleGuide from '../../../StyleGuide';
import LinearGradient from 'react-native-linear-gradient';

const marginHoriz = 34;
export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;
export const Background = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  background-color: ${StyleGuide.colors.dark.dark_4};
`;

export const StarsContainer = styled.SafeAreaView`
  position: absolute;
  left: 0;
  right: 0;
  top: 35px;
  margin: auto;
`;

export const Stars = styled(StarsSVG)`
  width: 45,
  height: 45,
  `;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin-horizontal: ${marginHoriz}px;
  margin-top: 32px;
`;

export const Title = styled(Heading3)`
  color: ${StyleGuide.colors.brand.white};
  text-align: center;
`;
export const TitleBlue = styled(Heading3)`
  color: ${StyleGuide.colors.brand.blue};
  text-align: center;
`;

export const SunAndRocket = styled.Image`
  width: 450px;
  height: 350px;

  margin-top: 25px;
`;

export const Button = styled.TouchableOpacity`
  border-radius: 50px;
  width: 246px;
  height: 45px;

  margin-bottom: 65px;
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
export const WrinklySunIcon = styled(WrinklySunSVG)`
width: 25,
height: 25,
`;
