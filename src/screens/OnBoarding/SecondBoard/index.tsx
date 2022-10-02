import React from 'react';
import {
  Container,
  Background,
  Body,
  StarsContainer,
  Stars,
  Title,
  TitleBlue,
  SolarSystem,
  TapToContinue,
} from './styles';

import SolarSystemImg from './../../../../assets/images/OnBoarding/SolarSystem.png';

export default function SecondBoard() {
  return (
    <Container>
      <Background>
        <StarsContainer>
          <Stars />
        </StarsContainer>
        <Body>
          <Title>
            A spacecraft that uses{' '}
            <TitleBlue>breakthrough technology and autonomy</TitleBlue> to
            endure <TitleBlue>heat and radiation</TitleBlue> like no other
            mission
          </Title>
          <SolarSystem resizeMode={'contain'} source={SolarSystemImg} />
          <TapToContinue>Slide to continue</TapToContinue>
        </Body>
      </Background>
    </Container>
  );
}
