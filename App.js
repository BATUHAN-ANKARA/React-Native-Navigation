import React from 'react'
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import MainTabScreen from './screens/MainTabScreen'
import {DrawerContent} from './screens/DrawerContent'
import SupportScreen from './screens/SupportScreen'
import SettingScreen from './screens/SettingsScreen'
import BookmarksScreen from './screens/BookmarksScreen'

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
        <Drawer.Screen name='SupportScreen' component={SupportScreen} />
        <Drawer.Screen name='SettingScreen' component={SettingScreen} />
        <Drawer.Screen name='BookmarksScreen' component={BookmarksScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
