// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions,StyleSheet,Platform, StatusBar,Alert, 
  TouchableOpacity,Text, View ,SafeAreaView,Image, 
  Button} from 'react-native';
  import {useDimensions,useDeviceOrientation} from "@react-native-community/hooks";
import WelcomeScreen from './app/assets/screens/WelcomeScreen';
import ViewImageScreen from './app/assets/screens/ViewImageScreen';
import MessagesScreen from './app/assets/screens/MessagesScreen';
import ListingDetailsScreen from './app/assets/screens/ListingDetailsScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card'
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
// export default function App() {
//   console.log(Dimensions.get("screen"));
//   console.log(useDimensions(),useDeviceOrientation());
//   const {landscape} = useDeviceOrientation();
//   console.log("app excuted",require('./assets/splash.png'));
//  const handlePress = ()=>console.log("Handdle Press From Outside")
//   return (
    
//   <SafeAreaView>
    
//     <View style={{
//       backgroundColor :'dodgerblue',
//       //width: "100%",

//       flex:1,
//       //height: landscape ? "100%" : "30%",
  
//   }}> 

//     </View>
//        <Text numberOfLines={1}
//       onPress={handlePress}>This is a really it longer</Text>
//        <Image source={require('./assets/splash.png')}/>
        
//         <Button title="third Alert" onPress={ ()=>
//           Alert.prompt("mY Title","My Message", text =>console.log(text))
//         }/>
//         <Button title = "second Click" onPress={()=>Alert.alert
//         ("Alert Box","New Message",
//         [
//           {text:"Yes",onPress:()=>console.log("Yes")},
//           {text:"No",onPress:()=>console.log("No")}
//         ])}/>
//         <Button color="green" title="Click Me" onPress={()=>{alert("Button Has been tapped")}}/>
//         <TouchableOpacity onPress={()=>{alert("Touch Press")}}>
//         <Image blurRadius={1} source={{
        
//         width :200,
//         height: 300,
//         uri:'https://picsum.photos/200/300',
//         }}/>
//         </TouchableOpacity> 
     
//       {/* <StatusBar style="auto" /> */}
//     </SafeAreaView>
  
//   )

  
// }
;
//import ListingDetailsScreen from './app/assets/screens/ListingDetailsScreen';
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: Platform.OS === "ios" ? StatusBar.currentHeight : 0,
//   },
// });



export default function App(){  
return (
//   <View style={{
//     backgroundColor : "#f8f4f4",
//     padding : 20,
//     paddingTop : 100,
//   }}>/
// <Card title="Red Jacket For Sale" subTitle = "$100" 
// image={require("./app/assets/jacket.jpg")} />
//   </View>
//<ListingDetailsScreen/>
//<ViewImageScreen/>
  //<WelcomeScreen/>
//<MessagesScreen/>
<Screen>
{/* <Icon name="email" size = {100}/>  */}
<ListItem title="My title" subTitle="My subtitle"  ImageComponent={
<Icon name = "email" 
/>}/>
</Screen>
//   <View
//     style={{
// flex : 1,
// justifyContent : "center",
//   alignItems: "center",
//     }}>
//      <ViewImageScreen/>
//    <AppButton title="Login" onPress={()=>console.log('tapped')}/>
//   </View>
//   <View style={{backgroundColor : "#fff",
//   flex: 1,
//   flexDirection : "row",
//   justifyContent : "center",
//   alignItems: "center",
//   //flexWrap : "wrap"
// }
//   }>

// <View style={{backgroundColor : "green",
// width:100,
// height:100,
// //alignSelf: 'flex-start'
//   // flex: 2
//   }}>

//   </View>
// <View style={{backgroundColor : "orange",
// width:100,
// height:100,
// //top: 20
//   // flex: 1
//   }}>

//   </View>
// <View style={{backgroundColor : "grey",
// width:100,
// height:100,
//   // flex: 1
//   }}>
//      </View>
// {/* <View style={{backgroundColor : "purple",
// width:100,
// height:100,
//   // flex: 1
//   }}>

//   </View>
//   <View style={{backgroundColor : "greenyellow",
// width:100,
// height:100,
//   // flex: 1
//   }}>

//   </View> */}
//   </View>
)
}