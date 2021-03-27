import React from 'react';
import { Image,StyleSheet, View } from 'react-native';
import colorsss from '/Users/abayomiigwubor/Projects/expoProjects/DoneWithIt/app/config/colors.js'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}> 
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>

        
<Image resizeMode="contain" style={styles.image} source={require("/Users/abayomiigwubor/Projects/expoProjects/DoneWithIt/app/assets/chair.jpg")}>

</Image>
        </View>
        
    );
}
const styles = StyleSheet.create({
    container: {
    backgroundColor:colorsss.black,
    flex: 1
    },
    closeIcon :{
        width: 50,
        height: 50,
        backgroundColor: colorsss.primary,
        position: "absolute",
        top: 15,
        left:30
    },
    image: {
        width : '100%',
        height:'100%'
    },
    deleteIcon :{
        width: 50,
        height: 50,
        backgroundColor: colorsss.secondary,
        position: "absolute",
        top: 15,
        right:30
    },
})


export default ViewImageScreen; 