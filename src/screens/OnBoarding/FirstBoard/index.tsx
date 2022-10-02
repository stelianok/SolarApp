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
            A scientific mission to unlock the mysteries of the{' '}
            <TitleBlue>Sun's corona</TitleBlue> and{' '}
            <TitleBlue>solar wind</TitleBlue>
          </Title>
          <Probe resizeMode={'contain'} source={ParkerProbe} />
          <TapToContinue>Tap to continue</TapToContinue>
        </Body>
      </Background>
    </Container>
  );
}
