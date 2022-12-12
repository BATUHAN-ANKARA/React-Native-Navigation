import React from 'react'
import {View, Text, Button} from 'react-native'

const DetailScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title='Go To Home' onPress={() => navigation.navigate('Home')} />
      <Button title='Go Back' onPress={() => navigation.goBack()} />
      <Button
        title='Go To First Screen'
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

export default DetailScreen
