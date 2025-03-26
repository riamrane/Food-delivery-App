import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
import { colors } from '../globals/style'



const OfferSlider = () => {
  return (
   <View>
        <View style={styles.offerSlider}>
          <Swiper autoplay={true} autoplayTimeout={5} showButtons={true} dotColor={colors.text2} activeDotColor={colors.text1}>
            <View style={styles.slide} >
              <Image source={require("../../assets/OfferSliderImages/img1.png")} style={styles.image}/>
            </View>
            <View style={styles.slide} >
              <Image source={require("../../assets/OfferSliderImages/img2.png")} style={styles.image}/>
            </View>
            <View style={styles.slide} >
              <Image source={require("../../assets/OfferSliderImages/img3.png")} style={styles.image}/>
            </View>
          </Swiper>
        </View>
        
   </View>
  )
}

export default OfferSlider

const styles = StyleSheet.create({
  offerSlider:{
    width:"100%",
    height:200,
    backgroundColor:colors.col1,
    paddingHorizontal:10,
    justifyContent:"center",
    alignItems:"center",
    marginVertical:10,
  },
  slide:{
    width:"100%",
    height:200,
    backgroundColor:colors.col1,
    justifyContent:"center",
    alignItems:"center"
  },
  image:{
    width:"100%",
    height:"100%",
    borderRadius:20,
  }
})
