
import React from 'react'
import { View, Text } from 'react-native'
import Svg, { Path } from "react-native-svg"

export default function HomeScreen() {
  return (
    <View style={{ flex:1,
     justifyContent:'center',alignItems:'center',
     backgroundColor:'#66ffc2'}} >


      <Text style={{fontSize:30,fontWeight:'bold',color:'black'}}       >Home</Text>
    </View>
  )
}