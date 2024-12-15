import React from 'react'
import { createNativeStackNavigator }from "@react-navigation/native-stack"
import { View } from 'react-native'
import WelcomeScreen from './WelcomeScreen';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Welcomepage" component={WelcomeScreen}
        options={{headerShown:false}} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="login" component={LoginScreen} />

    </Stack.Navigator>
  )
}

export default AuthNavigation
