import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import DetailScreen from './DetailScreen'
import HomeScreen from './HomeScreen'
import ExploreScreen from './ExploreScreen'
import ProfileScreen from './ProfileScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()

const DetailStack = createStackNavigator()
const HomeStack = createStackNavigator()

const MainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName='Home' activeColor='#f4f4'>
      <Tab.Screen
        name='Home'
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Icon name='ios-home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Notifications'
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#0093',
          tabBarIcon: ({color}) => (
            <Icon name='ios-notifications' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Icon name='ios-person' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Explore'
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: 'red',
          tabBarIcon: ({color}) => (
            <Icon name='ios-aperture' color={color} size={26} />
          ),
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
          <Icon
            name='ios-menu'
            size={25}
            backgroundColor='#009387'
            onPress={() => {
              navigation.openDrawer()
            }}></Icon>
        ),
      }}
    />
  </HomeStack.Navigator>
)

const DetailStackScreen = ({navigation}) => (
  <DetailStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
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
          <Icon
            name='ios-menu'
            size={25}
            backgroundColor='#1f65ff'
            onPress={() => {
              navigation.openDrawer()
            }}></Icon>
        ),
      }}
    />
  </DetailStack.Navigator>
)
