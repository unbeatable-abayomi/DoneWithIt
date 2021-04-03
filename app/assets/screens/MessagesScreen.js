import React from 'react';
import { FlatList,View, SafeAreaView, StyleSheet,StatusBar,Platform } from 'react-native';
import Constants from 'expo-constants';
import ListItem from '../../components/ListItem';

import Screen from '../../components/Screen'
import ListItemSeparator from '../../components/ListItemSeparator';
console.log(Constants)
const messages = [
    {
        id: 1,
        title:"T1",
        description : 'D1',
        image : require("../../assets/mosh.jpg")
    
    },   
     {
        id: 2,
        title:"T2",
        description : 'D2',
        image : require("../../assets/mosh.jpg")
    
    }
]
function MessagesScreen(props) {
    return (
        <Screen>
<FlatList data={messages} renderItem={({item}) => 
<ListItem
title={item.title} 
subTitle={item.description} 
image={item.image}
onPress = {()=> console.log("Message selected", item)} 
/>} 
keyExtractor={message =>
 message.id.toString()} ItemSeparatorComponent={ListItemSeparator}/>
        </Screen>
     
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;  