import React from 'react';

import {
  Container,
  Body,
  SolarSystem,
  CapyLogo,
  ChallengeContainer,
  NasaLogo,
  Title,
  Background,
} from './styles';

import SpaceAppsLogo from '../../../components/SpaceAppsLogo';
import SolarSystemPic from '../../../../assets/images/SolarSystemComplete.png';
import CapyLogoPic from '../../../../assets/images/CapyLogo.png';
import StarsBackground from '../../../components/StarsBackground';

export default function Home() {
  return (
    <Container>
      <Background>
        <StarsBackground />
        <SolarSystem source={SolarSystemPic} />
        <Body>
          <Title>A job done by: </Title>
          <CapyLogo resizeMode={'contain'} source={CapyLogoPic} />
          <Title>A challenge Made by: </Title>
          <ChallengeContainer>
            <NasaLogo width={110} height={110} />
            <SpaceAppsLogo />
          </ChallengeContainer>
        </Body>
      </Background>
    </Container>
  );
}
