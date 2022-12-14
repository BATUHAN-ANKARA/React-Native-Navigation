import React, {useContext, useState} from 'react'
import {View, StyleSheet} from 'react-native'
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer'
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper'
import {Icon} from 'react-native-vector-icons/Ionicons'
import {AuthContext} from '../components/context'

export function DrawerContent (props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const {signOut} = useContext(AuthContext)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
                }}
                size={50}
              />
              <View style={{flexDirection: 'column', marginLeft: 15}}>
                <Title style={styles.title}>Batuhan Ankara</Title>
                <Caption style={styles.caption}>@rastadamx</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label='Home'
              onPress={() => {
                props.navigation.navigate('Home')
              }}
            />
            <DrawerItem
              label='Profile'
              onPress={() => {
                props.navigation.navigate('Profile')
              }}
            />
            <DrawerItem
              label='Settings'
              onPress={() => {
                props.navigation.navigate('SettingScreen')
              }}
            />
            <DrawerItem
              label='Explore'
              onPress={() => {
                props.navigation.navigate('Explore')
              }}
            />
            <DrawerItem
              label='Bookmarks'
              onPress={() => {
                props.navigation.navigate('BookmarksScreen')
              }}
            />
            <DrawerItem
              label='Support'
              onPress={() => {
                props.navigation.navigate('SupportScreen')
              }}
            />
          </Drawer.Section>
          <Drawer.Section title='Preferences'>
            <TouchableRipple
              onPress={() => {
                toggleTheme()
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents='none'>
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            label='Sign Out'
            onPress={() => {
              signOut()
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})
