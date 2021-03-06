import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';r
import Home from './Screens/Home'
import Details from './Screens/Details'
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
const [loaded] = useFonts({
InterBold: require('./assets/fonts/Inter-Bold.ttf'),
InterLight: require('./assets/fonts/Inter-Light.ttf'),
InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),



})



  return (
    <NavigationContainer theme={theme}>
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
      inialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
    
       </NavigationContainer>
  )
}

export default App;

