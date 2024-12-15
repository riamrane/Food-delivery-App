import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WelcomeScreen from './src/screens/WelcomeScreen'
import LoginScreen from './src/screens/LoginScreen'

const App = () => {
  return (
    // <WelcomeScreen/>
    <LoginScreen/>
  )
}

export default App

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center",
  }
})