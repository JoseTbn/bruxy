import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';r
import Home from './Screens/Home'
import { View, Text } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import{NavigationContainer,createNativeStackNavigator, DefaultTheme}from '@react-navigation/native'


import {useFonts} from 'expo-font'


const Stack = createStackNavigator()
// const Stack = createNativeStackNavigator()

const theme = {...DefaultTheme, 
  colors:{
    ...DefaultTheme.colors,
    background: "transparent"
  } 
}


const App = () => {
  return (
    <NavigationContainer theme={theme}>
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
      inialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    {/* <Stack.Screen  /> */}
    </Stack.Navigator>
    
       </NavigationContainer>
  )
}

export default App;

