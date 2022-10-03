import React from 'react';

import {
  Container,
  Background,
  Body,
  StarsContainer,
  Stars,
  Title,
} from './styles';

import ParkerProbe from './../../../../assets/images/OnBoarding/Parker.png';

export default function Orbit() {
  return (
    <Container>
      <Background>
        <StarsContainer>
          <Stars />
        </StarsContainer>
        <Body>
          <Title>Orbit</Title>
        </Body>
      </Background>
    </Container>
  );
}
