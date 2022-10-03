import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import SolarSystemIcon from '../../../assets/images/NavBarIcons/SolarSystem.svg';
import SpaceIcon from '../../../assets/images/NavBarIcons/SpaceIcon.svg';

import {LabelText} from './styles';

import Home from '../../screens/MainTabs/Home';
import ParkerSolar from '../../screens/MainTabs/ParkerSolar';
import Orbit from '../../screens/MainTabs/Orbit';
import NorthernLights from '../../screens/MainTabs/NorthernLights';
import StyleGuide from '../../StyleGuide';
import Challenge from '../../screens/MainTabs/Challenge';

const Tab = createMaterialBottomTabNavigator();

export default function MainBottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      activeColor={StyleGuide.colors.brand.blue}
      inactiveColor={StyleGuide.colors.brand.white}
      // eslint-disable-next-line react-native/no-inline-styles
      barStyle={{
        backgroundColor: StyleGuide.colors.dark.dark_3,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        elevation: 10,
        position: 'absolute',
        overflow: 'hidden',
        left: 0,
        bottom: 0,
        right: 0,
        padding: 5,
      }}>
      <Tab.Screen
        name="ParkerSolarTab"
        component={ParkerSolar}
        options={{
          tabBarLabel: <LabelText>Parker Solar</LabelText>,
          tabBarIcon: ({color}) => (
            <MaterialIcon name="space-station" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="OrbitTab"
        component={Orbit}
        options={{
          tabBarLabel: <LabelText>Orbit</LabelText>,
          tabBarIcon: ({color}) => (
            <SpaceIcon
              width={22}
              height={22}
              style={{color: color}}
              onTouchEnd={() => {}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabel: <LabelText>Home</LabelText>,
          tabBarIcon: ({color}) => (
            <FontAwesome5Icon name="user-astronaut" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="NorthernLightsTab"
        component={NorthernLights}
        options={{
          tabBarLabel: <LabelText>Northern Lights</LabelText>,
          tabBarIcon: ({color}) => (
            <SolarSystemIcon width={22} height={22} style={{color: color}} />
          ),
        }}
      />
      <Tab.Screen
        name="ChallengeTab"
        component={Challenge}
        options={{
          tabBarLabel: <LabelText>Challenge</LabelText>,
          tabBarIcon: ({color}) => (
            <MaterialIcon
              name="rocket-launch-outline"
              color={color}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
