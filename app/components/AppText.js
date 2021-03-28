import React from 'react';
import {  Text,StyleSheet,Platform} from 'react-native';
// import {   } from "@expo/vector-icons";
function AppText({children,style}) {
    return (
    
            <Text style={[styles.text,style]}>{children}</Text>
        
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize : 18,
        //fontFamily : Plaform.OS === "android" ? "Roboto": "Avenir"
         fontFamily : "Roboto",
    }
})

export default AppText; 