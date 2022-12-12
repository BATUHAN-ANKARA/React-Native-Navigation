import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const BookmarksScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <Text>Bookmark Screen</Text>
      <Button title='Click Here' onPress={() => alert('Button Clicked')} />
    </View>
  )
}

export default BookmarksScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
