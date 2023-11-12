
import React, { useEffect, useRef } from 'react';
import {View,Text,TouchableOpacity,StyleSheet, useWindowDimensions,Animated} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';

import  IconTab from './IconTab'


export default function Coustomtab({state,descriptors,navigation}:BottomTabBarProps) {



  const{width}=useWindowDimensions();
  const Tab_bar_width=width;
  const Slide =Tab_bar_width/state.routes.length

  const SlideAnimation =useRef(new Animated.Value(0)).current

  useEffect(()=>{
    Animated.timing(SlideAnimation,{
      toValue: Slide * state.index,
      duration:150,
      useNativeDriver:true

    }).start()
  },[state.index])












  return (
    <View style={[style.tabBar,{width:Tab_bar_width}]}>
   <View style={{position:'absolute',top:0}} >
   <Svg
    
    width={Tab_bar_width}
    height={12}
    fill="none">
    <Path fill="#0055F9" d="M559 0H0v46h559V0z" />
   </Svg>
   </View>



      <Animated.View style={{width:Slide,height:90,
        position:'absolute',left:0,top:12,
        alignItems:'center',alignSelf:'center',
        transform:[{translateX:SlideAnimation}]

          }} >
              <Svg
           
                width={130}
                height={61}
                fill="none"
                style={{position:'absolute'}}
          
              >
                <Path fill="#fff" d="M0 0h130v61H0z" />
                <Path
                  fill="#0055F9"
                  d="M130 0h-30v30c3.432-18.928 9.648-25.804 30-30zM0 0h30v30C26.568 11.072 20.352 4.196 0 0zm30 0h70v26c0 19.33-15.67 35-35 35S30 45.33 30 26V0z"
                />
              </Svg>
            



      </Animated.View>







      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];


        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
            <IconTab route={route.name} isFocused={isFocused}  />
            
           
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  )
}
const style=StyleSheet.create({
    tabBar:{
        flex:1,
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        height:90,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
        
    }
})