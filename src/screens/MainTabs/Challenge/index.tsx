import React from 'react';
import { ScrollView } from 'react-native';

import {
  Container,
  Background,
  Body,
  StarsContainer,
  Stars,
  RowContainer,
  ContentContainer,
  ContentCard,
  ContentTitle,
  ContentImage,
  ContentDescription,
} from './styles';

import ParkerProbe from './../../../../assets/images/OnBoarding/Parker.png';
import SpaceAppsLogo from '../../../components/SpaceAppsLogo';

export default function Challenge() {
  return (
    <Container>
      <Background>
        <StarsContainer>
          <Stars />
        </StarsContainer>
        <Body>
          <ContentContainer>
            <ScrollView>
              <ContentCard>
                <RowContainer>
                  <ContentTitle>Challenge</ContentTitle>
                  <ContentImage source={ParkerProbe} />
                </RowContainer>

                <ContentDescription>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident ducimus tempore minima tenetur perspiciatis sequi
                  nisi? Debitis magnam est labore atque perspiciatis vitae sunt
                  soluta nemo ad accusantium. Deserunt, numquam!
                </ContentDescription>
              </ContentCard>
              <ContentCard>
                <ContentTitle>Solution</ContentTitle>
                <SpaceAppsLogo />
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
