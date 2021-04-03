import React from 'react';
import { Image,StyleSheet, View } from 'react-native';
import colorsss from '/Users/abayomiigwubor/Projects/expoProjects/DoneWithIt/app/config/colors.js'
import {MaterialCommunityIcons} from '@expo/vector-icons';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}> 
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" 
            color="white" size={30}/>
        </View>
        <View style={styles.deleteIcon}>

        <MaterialCommunityIcons name="trash-can-outline" 
            color="white" size={35}/>
        </View>

        
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
        position: "absolute",
        top: 15,
        left:30
    },
    image: {
        width : '100%',
        height:'100%'
    },
    deleteIcon :{
        position: "absolute",
        top: 15,
        right:30
    },
})


export default ViewImageScreen; 