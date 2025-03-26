import React from 'react'
import { Text, View , StatusBar, TextInput, StyleSheet } from 'react-native'
import HomeHeadNav from '../components/HomeHeadNav'
import Categories from '../components/Categories'
import OfferSlider from '../components/OfferSlider'
import { colors } from '../globals/style'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar />
        <HomeHeadNav />
        <View style={styles.searchbox}>
        <TextInput placeholder='search' style={styles.input} />
        </View>
        <Categories />
        <OfferSlider /> 
        {/* <Text>
            Home Screen
        </Text> */}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.col1,
    alignItems:"center",
    width:"100%",
  },
  searchbox:{
    flexDirection:"row",
    width:"90%",
    backgroundColor:colors.col1,
    borderRadius:30,
    alignItems:"center",
    padding:"10",
    margin:20,
    elevation:20,
  },
  input:{
    marginLeft:10,
    width:"90%",
    fontSize: 18,
    color: colors.text1,
  }
  
})