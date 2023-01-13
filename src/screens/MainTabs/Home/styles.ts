import styled from 'styled-components/native';
import { Heading3 } from '../../../GlobalStyles';

import NasaLogoSVG from '../../../../assets/images/NASA_logo.svg';
import StyleGuide from '../../../StyleGuide';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;
export const Background = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${StyleGuide.colors.dark.dark_4};
`;

export const Body = styled.View`
  flex: 0.8;
  align-items: center;
  margin-top: 5px;
  justify-content: space-around;
`;

export const SolarSystem = styled.Image``;
export const CapyLogo = styled.Image`
  width: 188px;
  height: 113px;
  border-radius: 200px;
`;
export const ChallengeContainer = styled.View`
  flex-direction: row;
`;
export const NasaLogo = styled(NasaLogoSVG)``;

export const Title = styled(Heading3)`
  color: ${StyleGuide.colors.brand.purple};
  text-align: center;
`;
