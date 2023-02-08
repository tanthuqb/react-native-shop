import React from 'react'
import { Text, View ,SafeAreaView ,StatusBar ,Platform  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
const Stack = createNativeStackNavigator()

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='home'
      options={{headerShown : false}}
      >
        <Stack.Group>
          <Stack.Screen name='home' component={Home} ></Stack.Screen>
          <Stack.Screen name='login' component={Login}></Stack.Screen>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main
