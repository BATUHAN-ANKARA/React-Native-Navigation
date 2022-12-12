import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import DetailScreen from './DetailScreen'
import HomeScreen from './HomeScreen'
import {Icon} from 'react-native-vector-icons/Ionicons'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()

const DetailStack = createStackNavigator()
const HomeStack = createStackNavigator()

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName='Feed'
      activeColor='#e91e63'
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name='home' color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name='Detail'
        component={DetailScreen}
        options={{
          tabBarLabel: 'Detail',
          tabBarIcon: ({color}) => <Icon name='bell' color={color} size={26} />,
        }}
      />
    </Tab.Navigator>
  )
}

export default MainTabScreen

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name='Home'
      component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon name='menu' size={25} backgroundColor='#009387' />
        ),
      }}
    />
  </HomeStack.Navigator>
)

const DetailStackScreen = ({navigation}) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DetailStack.Screen
      name='Details'
      component={DetailScreen}
      options={{
        headerLeft: () => (
          <Icon name='menu' size={25} backgroundColor='#009387' />
        ),
      }}
    />
  </DetailStack.Navigator>
)
