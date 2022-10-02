import React from 'react';

import AstronomerPic from '../../../assets/images/OnBoarding/Astronomer.png';
import {
  Container,
  StarsContainer,
  Stars,
  Background,
  Body,
  Title,
  Astronomer,
  Button,
  Row,
  ButtonText,
  WrinklySunIcon,
} from './styles';

import {Heading2} from '../../GlobalStyles';
import StyleGuide from '../../StyleGuide';
export default function IntroScreen() {
  return (
    <Container>
      <Background>
        <StarsContainer>
          <Stars />
        </StarsContainer>
        <Body>
          <Title>
            Let’s Explore the{' '}
            <Title style={{color: StyleGuide.colors.brand.blue}}>Sun</Title>{' '}
            with{' '}
            <Title style={{color: StyleGuide.colors.brand.blue}}>
              Parker Solar Probe
            </Title>
          </Title>
          <Astronomer source={AstronomerPic} />
          <Button>
            <Row>
              <ButtonText>Let's Go!</ButtonText>
              <WrinklySunIcon />
            </Row>
          </Button>
        </Body>
      </Background>
    </Container>
  );
}
