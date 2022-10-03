import styled from 'styled-components/native';
import { Heading3 } from '../../../GlobalStyles';

import StarsSVG from '../../../../assets/images/StarsBackMobile.svg';
import NasaLogoSVG from '../../../../assets/images/NASA_logo.svg';
import StyleGuide from '../../../StyleGuide';

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
  margin-horizontal: 113px;
  margin-top: 32px;
`;
export const SolarSystem = styled.Image``;
export const CapyLogo = styled.Image`
  width: 200px;
  height: 200px;
`;
export const ChallengeContainer = styled.View`
  flex-direction: row;
`;
export const NasaLogo = styled(NasaLogoSVG)``;
export const SpaceAppsLogo = styled.Image``;

export const Title = styled(Heading3)`
  color: ${StyleGuide.colors.brand.purple};
  text-align: center;
`;
