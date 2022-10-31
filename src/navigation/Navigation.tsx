import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/homeScreen/HomeScreen';
import {ProfileScreen} from '../screens/profileScreen/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LevelScreen} from '../screens/homeScreen/levelScreen/LevelScreen';
import {DetailLevelScreen} from '../screens/homeScreen/detailLevelScreen/DetailLevelScreen';
import HomeIcon from '../assets/home-icon.svg';
import ProfileIcon from '../assets/profile-icon.svg';
import {Button} from 'react-native';
import BackIcon from '../assets/back-icon.svg';
import {EducationScreen} from '../screens/homeScreen/educationScreen/EducationScreen';
import {DetailEducationScreen} from '../screens/homeScreen/detailEducationScreen/DetailEducationScreen';
type RootStackParamList = {
  HomeScreen: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen
        name="Inicio"
        component={HomeScreen}
        // options={{t}}
        options={{
          headerShadowVisible: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Niveles"
        component={LevelScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerShadowVisible: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Inicial"
        component={DetailLevelScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="Ciclo VI"
        component={EducationScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
        }}
      />
      <HomeStackNavigator.Screen
        name="3 a 5 años"
        component={DetailEducationScreen}
        options={{
          headerShown: true,
          headerBackTitleVisible: false,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerShadowVisible: false,
        }}
      />
    </HomeStackNavigator.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#EB1E23',
        headerTitleStyle: {
          fontWeight: 'bold',
          borderBottomWidth: 0,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={MyStack}
        options={{
          tabBarLabel: 'Inicio',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <HomeIcon width={25} height={25} color={color} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color, size}) => (
            <ProfileIcon width={25} height={25} fill={color} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
