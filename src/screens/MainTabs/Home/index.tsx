import React from 'react';

import {
  Container,
  Background,
  StarsContainer,
  Stars,
  Body,
  SolarSystem,
  CapyLogo,
  ChallengeContainer,
  NasaLogo,
  SpaceAppsLogo,
  Title,
} from './styles';

import SolarSystemPic from '../../../../assets/images/SolarSystemComplete.png';
import CapyLogoPic from '../../../../assets/images/CapyLogo.png';
import SpaceAppsLogoPic from '../../../../assets/images/SpaceAppsLogo.png';

export default function Home() {
  return (
    <Container>
      <Background>
        <StarsContainer>
          <Stars />
        </StarsContainer>
        <SolarSystem source={SolarSystemPic} />
        <Body>
          <Title>A job done by: </Title>
          <CapyLogo resizeMode={'contain'} source={CapyLogoPic} />
          <Title>A challenge Made by: </Title>
          <ChallengeContainer>
            <NasaLogo width={110} height={92} />
            <SpaceAppsLogo source={SpaceAppsLogoPic} />
          </ChallengeContainer>
        </Body>
      </Background>
    </Container>
  );
}
