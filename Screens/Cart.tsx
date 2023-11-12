
import React from 'react'
import { View, Text } from 'react-native'

export default function CartScreen() {
  return (
    <View style={{ flex:1,
      justifyContent:'center',alignItems:'center',
      backgroundColor:'violet'}} >
      <Text style={{fontSize:30,fontWeight:'bold',color:'black'}}     >Cart</Text>
    </View>
  )
}