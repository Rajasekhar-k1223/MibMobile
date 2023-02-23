import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

interface Props { 

}
export default function GettingCall(props:Props) {
  return (
      <View style={ style.container}>
          <Text>GettingCall</Text>
          <Image source={require('../img/blog.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:"center",
    },
    image: {
        position: "absolute",
        
    }
})