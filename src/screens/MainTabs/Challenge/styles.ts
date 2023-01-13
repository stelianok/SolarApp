import styled from 'styled-components/native';
import { Heading3, ParagraphMobile } from '../../../GlobalStyles';

import StarsSVG from '../../../../assets/images/StarsBackMobile.svg';

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
  width: 45;
  height: 45;
`;

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin-top: 32px;
`;

export const ContentContainer = styled.View``;
export const ContentCard = styled.View`
  align-items: center;
`;
export const RowContainer = styled.View`
  flex-direction: row;
`;
export const ContentTitle = styled(Heading3)`
  color: ${StyleGuide.colors.brand.purple};
`;
export const ContentImage = styled.Image``;

export const ContentDescription = styled(ParagraphMobile)`
  color: '#FFF';
  text-align: center;
`;

export const Probe = styled.Image`
  width: 375px;
  height: 345px;
`;
