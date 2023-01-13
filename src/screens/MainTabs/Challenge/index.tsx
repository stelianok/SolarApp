import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import {
  Container,
  Background,
  Body,
  RowContainer,
  ContentContainer,
  ContentCard,
  ContentTitle,
  ContentImage,
  ContentDescription,
} from './styles';

import ParkerProbe from './../../../../assets/images/OnBoarding/Parker.png';
import SpaceAppsLogo from '../../../components/SpaceAppsLogo';
import StarsBackground from '../../../components/StarsBackground';

export default function Challenge() {
  return (
    <Container>
      <Background>
        <StarsBackground />
        <Body>
          <ContentContainer>
            <ScrollView>
              <ContentCard>
                <RowContainer>
                  <ContentTitle>Challenge</ContentTitle>
                  <ContentImage resizeMode={'contain'} source={ParkerProbe} />
                </RowContainer>
                <ContentDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident ducimus tempore minima tenetur perspiciatis sequi
                  nisi? Debitis magnam est labore atque perspiciatis vitae sunt
                  soluta nemo ad accusantium. Deserunt, numquam!
                </ContentDescription>
              </ContentCard>
              <ContentCard>
                <RowContainer>
                  <ContentTitle>Solution</ContentTitle>
                  <SpaceAppsLogo />
                </RowContainer>
                <ContentDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident ducimus tempore minima tenetur perspiciatis sequi
                  nisi? Debitis magnam est labore atque perspiciatis vitae sunt
                  soluta nemo ad accusantium. Deserunt, numquam!
                </ContentDescription>
              </ContentCard>
            </ScrollView>
          </ContentContainer>
        </Body>
      </Background>
    </Container>
  );
}
