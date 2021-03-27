import React from 'react';
import {  Text,StyleSheet,Platform} from 'react-native';
// import {   } from "@expo/vector-icons";
function AppText({children}) {
    return (
        <div>
            <Text styles={ styles.text }>{chlidren}</Text>
        </div>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize : 18,
        fontFamily : Plaform.OS === "android" ? "Roboto": "Avenir"
    }
})

export default AppText; 