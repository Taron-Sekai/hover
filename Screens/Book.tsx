
import React from 'react'
import { View, Text } from 'react-native'

export default function BookScreen() {
  return (
    <View  style={{ flex:1,
      justifyContent:'center',alignItems:'center',
      backgroundColor:'#2993ff'}} >
      <Text   style={{fontSize:30,fontWeight:'bold',color:'black'}}       >Book</Text>
    </View>
  )
}