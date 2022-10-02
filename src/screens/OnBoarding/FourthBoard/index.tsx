import React from 'react';
import {
  Container,
  Background,
  Body,
  StarsContainer,
  Stars,
  Title,
  TitleBlue,
  SunAndRocket,
  Button,
  LinearGradientBackground,
  Row,
  ButtonText,
  WrinklySunIcon,
} from './styles';

import SunAndRocketPic from './../../../../assets/images/OnBoarding/SunAndRocket.png';
import {useNavigation} from '@react-navigation/native';

export default function FourthBoard() {
  const navigation = useNavigation();
  return (
    <Container>
      <Background>
        <StarsContainer>
          <Stars />
        </StarsContainer>
        <Body>
          <Title>
            A unique solar observatory that will orbit within{' '}
            <TitleBlue> 4 million miles</TitleBlue> of our star's surface to
            directly study the formation of the{' '}
            <TitleBlue>solar wind</TitleBlue>
          </Title>
          <SunAndRocket resizeMode={'contain'} source={SunAndRocketPic} />
          <Button
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <LinearGradientBackground
              colors={['#6A3BB4', '#AE49C1', '#EC56CC']}>
              <Row>
                <ButtonText>Let's Go!</ButtonText>
                <WrinklySunIcon />
              </Row>
            </LinearGradientBackground>
          </Button>
        </Body>
      </Background>
    </Container>
  );
}
