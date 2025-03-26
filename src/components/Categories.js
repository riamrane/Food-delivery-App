import React from 'react'
import { StyleSheet, Text, View , ScrollView} from 'react-native'
import { colors } from '../globals/style'

const Categories = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.head}>
            Categories
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.box}>
            <Text style={styles.text}>Burger</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Pizza</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Noodles</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Biryani</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Burger</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.text}>Burger</Text>
          </View>
        </ScrollView>
    </View>
  )
}

export default Categories


const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.col1,
    width:"90%",
    elevation:10,
    borderRadius:10,
  },
  head:{
    color:colors.text1,
    fontSize:25,
    fontWeight:"300",
    margin:10,
    alignSelf:"center",
    paddingBottom: 5,
    borderBottomColor: colors.text1,
    borderBottomWidth:1,
  },
  box:{
    backgroundColor:colors.col1,
    elevation:20,
    margin:10,
    padding:10,
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",
  },
  text:{
    color:colors.text3,
  }
})