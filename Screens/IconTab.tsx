import { View, Text } from 'react-native'
import React from 'react'
import Icon  from 'react-native-vector-icons/Ionicons';
type Props={
    route:string,
    isFocused:boolean,
    
}

export default function IconTab({route,isFocused}:Props) {
    


    let iconname:string=''
    if (route==='Home') {
        iconname=isFocused?'home':'home-outline'
        
    }else if (route==='Cart' ) {
        iconname=isFocused?'cart':'cart-outline'
        
    }else if ( route==='Like' ) {
        iconname=isFocused?'heart-sharp':'heart-outline'
    }else if (route==='Book') {
        iconname=isFocused?'extension-puzzle':'extension-puzzle-outline'
        
    }
  return (
    <Icon name={iconname} size={25} color={isFocused?'white':'#443F9D'}  />

  )
}