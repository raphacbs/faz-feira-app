/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../HomeScreen';
import ListsScreen from '../ListsScreen';
import SettingsScreen from '../SettingsScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import {myTheme} from '../../theme/theme';
// import {useTheme} from '../../hooks';

const Tab = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: myTheme.colors.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="barcode" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Minhas Listas"
        component={ListsScreen}
        options={{
          tabBarLabel: 'Minhas Listas',
          tabBarIcon: ({color, size}) => (
            <Icon name="bars" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Configurações',
          tabBarIcon: ({color, size}) => (
            <Icon name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MainTabScreen;
