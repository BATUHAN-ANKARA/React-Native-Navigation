import React, {useEffect, useMemo, useReducer, useState} from 'react'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import MainTabScreen from './screens/MainTabScreen'
import {DrawerContent} from './screens/DrawerContent'
import SupportScreen from './screens/SupportScreen'
import SettingScreen from './screens/SettingsScreen'
import BookmarksScreen from './screens/BookmarksScreen'
import RootStackScreen from './screens/RootStackScreen'
import {View} from 'react-native'
import {ActivityIndicator} from 'react-native-paper'
import {AuthContext} from './components/context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {Provider, MD3DarkTheme, adaptNavigationTheme} from 'react-native-paper'

const Drawer = createDrawerNavigator()

const {DarkTheme} = adaptNavigationTheme({reactNavigationDark: DefaultTheme})

const App = () => {
  // const [isLoading, setIsLoading] = useState(true)
  // const [userToken, setUserToken] = useState(null)

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  }

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        }
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        }
    }
  }

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState)

  const authContext = useMemo(
    () => ({
      signIn: async foundUser => {
        // setUserToken('abc')
        // setIsLoading(false)
        const userToken = String(foundUser[0].userToken)
        const userName = foundUser[0].username
        try {
          await AsyncStorage.setItem('userToken', userToken)
        } catch (e) {
          console.log(e)
        }

        console.log(userToken)
        dispatch({type: 'LOGIN', id: userName, token: userToken})
      },
      signOut: async () => {
        // setUserToken(null)
        // setIsLoading(false)
        try {
          userToken = 'dfgdfg'
          await AsyncStorage.removeItem('userToken')
        } catch (e) {
          console.log(e)
        }
        dispatch({type: 'LOGOUT'})
      },
      signUp: () => {
        // setUserToken('fgkj')
        // setIsLoading(false)
      },
      toggleTheme: () => {
        setIsDarkTheme(isDarkTheme => !isDarkTheme)
      },
    }),
    [],
  )

  useEffect(() => {
    setTimeout(async () => {
      //setIsLoading(false)
      let userToken
      userToken = null
      console.log(userToken)
      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log(e)
      }
      dispatch({type: 'REGISTER', token: userToken})
    }, 1000)
  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <Provider theme={MD3DarkTheme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={DarkTheme}>
          {loginState.userToken == null ? (
            <RootStackScreen />
          ) : (
            <Drawer.Navigator
              drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen
                name='HomeDrawer'
                component={MainTabScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Drawer.Screen name='SupportScreen' component={SupportScreen} />
              <Drawer.Screen name='SettingScreen' component={SettingScreen} />
              <Drawer.Screen
                name='BookmarksScreen'
                component={BookmarksScreen}
              />
            </Drawer.Navigator>
          )}
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  )
}

export default App
