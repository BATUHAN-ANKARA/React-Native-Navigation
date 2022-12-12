import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'

const ExploreScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <Text>Explore Screen</Text>
      <Button title='Click Here' onPress={() => alert('Button Clicked')} />
    </View>
  )
}

export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
