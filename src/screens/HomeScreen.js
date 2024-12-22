import React from 'react'
import { Text, View , StatusBar, TextInput, StyleSheet } from 'react-native'
import HomeHeadNav from '../components/HomeHeadNav'
import Categories from '../components/Categories'
import OfferSlider from '../components/OfferSlider'

const HomeScreen = () => {
  return (
    <View>
        <StatusBar />
        <HomeHeadNav />
        <TextInput placeholder='search' />
        <Categories />
        <OfferSlider />
        {/* <Text>
            Home Screen
        </Text> */}
    </View>
  )
}

export default HomeScreen
