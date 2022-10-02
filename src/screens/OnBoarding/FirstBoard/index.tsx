import React from 'react';

import {
  Container,
  Background,
  Body,
  StarsContainer,
  Stars,
  Title,
  TitleBlue,
  Probe,
  TapToContinue,
} from './styles';

import ParkerProbe from './../../../../assets/images/OnBoarding/Parker.png';

export default function FirstBoard() {
  return (
    <Container>
      <Background>
        <StarsContainer>
          <Stars />
        </StarsContainer>
        <Body>
          <Title>
            <TitleBlue>Parker Solar Probe </TitleBlue>
            is a NASA space probe
          </Title>
          <Probe resizeMode={'contain'} source={ParkerProbe} />
          <TapToContinue>Tap to continue</TapToContinue>
        </Body>
      </Background>
    </Container>
  );
}
