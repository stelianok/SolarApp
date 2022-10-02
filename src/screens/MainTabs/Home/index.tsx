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

export default function Home() {
  return (
    <Container>
      <Background>
        <StarsContainer>
          <Stars />
        </StarsContainer>
        <Body>
          <Title>XD</Title>
        </Body>
      </Background>
    </Container>
  );
}
