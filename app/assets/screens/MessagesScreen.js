import React, {useState} from 'react';
import { FlatList,View, SafeAreaView, StyleSheet,StatusBar,Platform } from 'react-native';
import Constants from 'expo-constants';
import ListItem from '../../components/ListItem';
import colors from '../../config/colors'
import Screen from '../../components/Screen'
import ListItemSeparator from '../../components/ListItemSeparator';
import ListItemDeleteAction from '../../components/ListItemDeleteAction';
//console.log(Constants)
const initialMessages = [
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
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);
    // const arrycount = useState(0);
    // let counts = arrycount[0];
    // let setCount = arrycount[1];
    const handleDelete = (message) =>{
        //delete the message from messages
        // const newMessages = messages.filter(m => m.id !== message.id);
         //console.log(newMessages);
        //setMessages(newMessages);
        setMessages(messages.filter((m) => m.id !== message.id));
        //console.log(messages);
        //call the server
    };
    return (
        <Screen>
<FlatList data={messages} renderItem={({item}) => (
<ListItem
title={item.title} 
subTitle={item.description} 
image={item.image}
onPress = {()=> console.log("Message selected", item)}
// renderRightActions ={()=> <View style={{
//     width: 70,
//     backgroundColor : colors.danger

//     }}></View>} 
renderRightActions = {()=> (<ListItemDeleteAction 
    onPress={()=> handleDelete(item)}/>)}
/>)} 
// keyExtractor={message =>
//  message.id.toString()} ItemSeparatorComponent={ListItemSeparator}
ItemSeparatorComponent={ListItemSeparator}
refreshing={refreshing}
onRefresh={()=>{
setMessages([
    {
        id: 2,
        title:"T2",
        description : 'D2',
        image : require("../../assets/mosh.jpg")
    
    },
])

}}
 />
        </Screen>
     
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;  