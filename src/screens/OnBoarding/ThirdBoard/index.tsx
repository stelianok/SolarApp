import React from 'react';

import {
  Container,
  Background,
  Body,
  StarsContainer,
  Stars,
  Title,
  TitleBlue,
  PlanetGroupContainer,
  PlanetGroup,
  TapToContinue,
} from './styles';

export default function ThirdBoard() {
  return (
    <Container>
      <Background>
        <StarsContainer>
          <Stars />
        </StarsContainer>
        <Body>
          <Title>
            The first mission named for a living scientist:{' '}
            <TitleBlue>Dr. Eugene Parker</TitleBlue>, who theorized the
            existence of the solar wind
          </Title>
          <PlanetGroupContainer>
            <PlanetGroup />
          </PlanetGroupContainer>
          <TapToContinue>Slide to continue</TapToContinue>
        </Body>
      </Background>
    </Container>
  );
}
