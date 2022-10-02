import styled from 'styled-components/native';
import { Heading2, Heading3, Heading4 } from '../../../GlobalStyles';

import { Dimensions } from 'react-native';

import StarsSVG from '../../../../assets/images/StarsBackMobile.svg';
import WrinklySunSVG from '../../../../assets/images/OnBoarding/SunWrinkly.svg';

import StyleGuide from '../../../StyleGuide';

const { width, height } = Dimensions.get('window');
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

export const TapToContinue = styled(Heading4)`
  color: ${StyleGuide.colors.brand.white};
  text-align: center;

  padding-bottom: 50px;
`;
