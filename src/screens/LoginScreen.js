import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { btn1, colors, titles } from '../globals/style'
import eye from '../../assets/eye.jpg'
import { useNavigation } from '@react-navigation/native'
const LoginScreen = () => {
    const [emailfocus, setEmailfocus] = useState(false);
    const [passwordfocus, setPasswordfocus] = useState(false);
    const [showpassword, setShowpassword] = useState(false);
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <Text style={styles.head1}>Sign in</Text>
        <View style={styles.inputout}>
            <TextInput style={styles.input} placeholder='Email'/>
        </View>
        <View style={styles.inputout}>
            <TextInput style={styles.input} placeholder='Password' 
            onFocus={()=>{
                setEmailfocus(false)
                setPasswordfocus(true)
            }}
            secureTextEntry={showpassword === false ? true : false}/>
            {/* <Image source={eye} style={styles.eye} onClick={()=>onFocus()}/> */}
        </View>
        <TouchableOpacity style={btn1}>
            <Text style={{color:colors.col1, fontSize:titles.btntext, fontWeight:"bold"}}>
                Sign in
            </Text>
        </TouchableOpacity>
        
        <Text style={styles.forgot}>Forgot Password?</Text>
        <Text style={styles.or}>OR</Text>
        <Text style={styles.gftext}>Sign In With</Text>

        <Text>Don't have an account?
            <Text style={styles.signup} onPress={()=>navigation.navigate('signup')}>Sign Up</Text>
        </Text>

    </View>
  )
}

export default LoginScreen


styles= StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
    },
    head1:{
        fontSize:titles.title1,
        color:colors.text1,
        textAlign:"center",
        marginVertical:10,
    },
    inputout:{
        flexDirection:"row",
        width:'80%',
        marginVertical:10,
        backgroundColor:colors.col1,
        borderRadius:10,
        paddingVertical:10,
        paddingHorizontal:10,
        alignSelf:"center",
        elevation:20,
    },
    input:{
        fontSize:10,
        marginLeft:10,
        width:"80%"
    },
    eye:{
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:"center"
    },
    forgot:{
        color:colors.text2,
        marginTop:20,
        marginBottom:10
    },
    or:{
        color: colors.text1,
        marginVertical:10,
        fontWeight:"bold",
    },
    gftext:{
        color:colors.text2,
        marginVertical:10,
        fontSize:25,
    },
    signup:{
        color:colors.text1,
    }
})