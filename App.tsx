
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator,BottomTabBarProps } from '@react-navigation/bottom-tabs';

import HomeScreen from './Screens/Home';
import CartScreen from './Screens/Cart';
import LikeScreen from './Screens/Like';
import BookScreen from './Screens/Book';
import Coustomtab from './Screens/CoustomTab'

const Tab = createBottomTabNavigator<BottomTabParamList>();

export type BottomTabParamList={
  Home:undefined;
  Cart:undefined;
  Like:undefined;
  Book:undefined;


}
const CoustomTabs=(props:BottomTabBarProps)=>{
  return< Coustomtab{...props} />

}

export default function App() {
  return (
    <NavigationContainer>

      <Tab.Navigator screenOptions={{headerShown:false}} tabBar={CoustomTabs} >
        
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='Cart' component={CartScreen} />
      <Tab.Screen name='Like' component={LikeScreen} />
      <Tab.Screen name='Book' component={BookScreen} />
      

      </Tab.Navigator>
      

    </NavigationContainer>

  )
}