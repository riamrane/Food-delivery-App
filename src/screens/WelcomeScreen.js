import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import logo from '../../assets/logo.jpg'
import style, {colors, hr80} from '../globals/style.js'
const WelcomeScreen = () => {
  return (
    <View style = {styles.container}>
        <Text style={styles.title}>Welcome to Foodie</Text>
        <View style={styles.logoout}>
            <Image style={styles.logo} source={logo}/>
        </View>
        <View style ={hr80}/>
        <Text style={styles.text}>Find the best food around you at the lowest price</Text>
        <View style ={hr80}/>
        <View style={styles.btnout} >
          <TouchableOpacity>
            <Text style={styles.btn}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn}>Sign In</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red",
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
      fontSize: 50,
      color:colors.col1,
      textAlign:"center",
      marginVertical:20,
      fontWeight:'200',
    },
    logoout:{
      width:"80%",
      height:"30%",
      alignItems:"center",
      // backgroundColor:"white"
    },
    logo:{
      width:"100%",
      height:"100%"
    },
    text:{
      fontSize:18,
      width:"80%",
      color:colors.col1,
      textAlign:"center",
    },
    btnout:{
      flexDirection:'row'
    },
    btn:{
      fontSize:20,
      color:colors.text1,
      textAlign:"center",
      marginVertical:30,
      marginHorizontal:10,
      fontWeight:'700',
      backgroundColor:"#fff",
      borderRadius:10,
      padding:10,
      paddingHorizontal:20,
    }
})
export default WelcomeScreen
