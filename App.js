import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RootNavigation from './src/RootNavigation'

const App = () => {
  return (
    <RootNavigation/>
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