import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../globals/style'


const HomeHeadNav = () => {
  return (
    <View style={styles.container}>
        <Text>
            Hamburger
        </Text>
        <View style={styles.containerin}>
            <Text> Foodie</Text>

        </View>
        <Text>Profile image</Text>
    </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:"100%",
        justifyContent:'space-between',
        padding:10,
        alignItems:'center',
        backgroundColor:colors.col1,
        elevation: 20,
        borderBottomLeftRadius:20,
        borderBottoRightRadius:20
    },
    containerin:{
        flexDirection:"row",
        alignItems:"center",
    }
})
