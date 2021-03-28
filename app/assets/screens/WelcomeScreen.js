import React from 'react';
import { Image, ImageBackground ,StyleSheet, Text, View} from 'react-native';
import AppButton from '../../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={10}
        style={styles.background} 
        source={require("/Users/abayomiigwubor/Projects/expoProjects/DoneWithIt/app/assets/background.jpg")}>
      <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("/Users/abayomiigwubor/Projects/expoProjects/DoneWithIt/app/assets/logo-red.png")}></Image> 
       <Text style={styles.tagline}>Sell What you Don't Want</Text>  
      </View>
       {/* <Image style={styles.logo} source={require("/Users/abayomiigwubor/Projects/expoProjects/DoneWithIt/app/assets/logo.jpeg")}></Image> 
       <Text>Sell What you Don't Want</Text>     */}
       <View style={styles.buttonContanier}>

       <AppButton title="Login"/>
       <AppButton title="Register" color="secondary"/>
      {/* <View style={styles.registerButton}></View> */}
       </View>
       {/* <AppButton title='Login'/>
<View style={styles.registerButton}></View> */}
{/* <View style={styles.loginButton}></View> */}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background :{
        flex:1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    buttonContanier:{
        padding : 20,
        width : "100%" 
    },
   
    // loginButton :{
    //     width :"100%",
    //     height : 70,
    //     backgroundColor : "#1d3557"
    // },
    logo : {
        width : 100,
        height: 100,
        borderRadius: 30
        
    },
    // registerButton :{
    //     width :"100%",
    //     height : 70,
    //     backgroundColor : "#fc5c65"
    // },
    logoContainer:{
        position : "absolute",
        top: 70,
        alignItems : 'center'
    },
    tagline:{
        fontSize : 25,
        fontWeight : '600',
        paddingVertical : 20,
    }
})

export default WelcomeScreen;