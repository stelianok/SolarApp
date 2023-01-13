import styled from 'styled-components/native';
import { Heading3, ParagraphMobile } from '../../../GlobalStyles';

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

export const Body = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin-top: 32px;
`;

export const ContentContainer = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const ContentCard = styled.View`
  flex: 1;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
`;
export const RowContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const ContentTitle = styled(Heading3)`
  color: ${StyleGuide.colors.brand.purple};
  text-align: center;
`;
export const ContentImage = styled.Image`
  width: 169.22px;
  height: 117.7px;
  transform: rotate(20deg);
`;

export const ContentDescription = styled(ParagraphMobile)`
  color: '#FFF';
  text-align: center;
`;
