import React from 'react';
import { Image, ImageBackground ,StyleSheet, Text, View} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style={styles.background} 
        source={require("/Users/abayomiigwubor/Projects/expoProjects/DoneWithIt/app/assets/background.jpg")}>
      <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("/Users/abayomiigwubor/Projects/expoProjects/DoneWithIt/app/assets/logo-red.png")}></Image> 
       <Text>Sell What you Don't Want</Text>  
      </View>
       {/* <Image style={styles.logo} source={require("/Users/abayomiigwubor/Projects/expoProjects/DoneWithIt/app/assets/logo.jpeg")}></Image> 
       <Text>Sell What you Don't Want</Text>     */}
<View style={styles.loginButton}></View>
<View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background :{
        flex:1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    loginButton :{
        width :"100%",
        height : 70,
        backgroundColor : "#1d3557"
    },
    logo : {
        width : 100,
        height: 100,
        borderRadius: 30
        
    },
    registerButton :{
        width :"100%",
        height : 70,
        backgroundColor : "#fc5c65"
    },
    logoContainer:{
        position : "absolute",
        top: 70,
        alignItems : 'center'
    }
})

export default WelcomeScreen;