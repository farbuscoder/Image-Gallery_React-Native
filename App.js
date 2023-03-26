import React from 'react'

//Expo
import { StatusBar } from 'expo-status-bar';

//React Native
import { Text, Image, StyleSheet } from 'react-native';

//React navigation
import  { NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"

//COmponents
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';

//Image
import pexelsLogo from "./assets/Pexels-Logo.jpg"

const Stack = createNativeStackNavigator()

export default function App() {

  console.log("app executed")

  return (
<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
    headerLeft:()=><Image source={pexelsLogo} style={styles.logo}/>,
    headerRight:()=>{
     return <Text onPress={()=>{console.log("searching")}} style={{color:"white", fontSize:18}} >Search</Text>
    },
    title:"Pexels App",
    headerTintColor:"#fff",
   headerTitleStyle:{
    fontWeight:"bold"
   },
    headerStyle:{
      backgroundColor:"#0d0d0d"
    }
  }} />
  <Stack.Screen name="ImageScreen" component={ImageScreen} />
</Stack.Navigator>
<StatusBar/>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo:{
    width:37,
    height:37,
    marginEnd:5,
    borderRadius:5
  }
})
