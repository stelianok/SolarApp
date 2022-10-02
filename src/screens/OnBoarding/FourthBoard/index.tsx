import React from 'react';
import {
  Container,
  Background,
  Body,
  StarsContainer,
  Stars,
  Title,
  TitleBlue,
  SunAndRocket,
  TapToContinue,
} from './styles';

import SunAndRocketPic from './../../../../assets/images/OnBoarding/SunAndRocket.png';

export default function FourthBoard() {
  return (
    <Container>
      <Background>
        <StarsContainer>
          <Stars />
        </StarsContainer>
        <Body>
          <Title>
            A unique solar observatory that will orbit within{' '}
            <TitleBlue> 4 million miles</TitleBlue> of our star's surface to
            directly study the formation of the{' '}
            <TitleBlue>solar wind</TitleBlue>
          </Title>
          <SunAndRocket resizeMode={'contain'} source={SunAndRocketPic} />
          <TapToContinue>Tap to continue</TapToContinue>
        </Body>
      </Background>
    </Container>
  );
}
