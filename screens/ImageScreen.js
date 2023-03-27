import React from 'react'

//React Native
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

//React native elements
import { Avatar, Button } from 'react-native-elements';

//Expo web Browser
import * as WebBrowser from "expo-web-browser"



const ImageScreen = ({route}) => {

  const {image} = route.params;

  const handlePress =async ()=>{
    await WebBrowser.openBrowserAsync(image.photographer_url)
  }

  return (
    <View style={styles.headerPhotographer} >
      <Image source={{uri:image.src.large, height:350}} />
   <View style={{display:"flex",
    paddingVertical:18,
    justifyContent:"space-between",
    width:"100%",
    flexDirection:'row',
    alignItems:"center"
    }} >
   <View style={{display:'flex', flexDirection:"row", alignItems:"center"}} >
        <Avatar title={image.photographer.split(' ').map(string=>string[0]).join('').toUpperCase()}
         containerStyle={{backgroundColor:image.avg_color}} 
         rounded />
        <TouchableOpacity onPress={handlePress} >
        <Text style={styles.textPhotographer} >{image.photographer}</Text>
        </TouchableOpacity>
    </View>
    <Button title={"Download"} buttonStyle={{backgroundColor:"#229783"}} />
   </View>
    </View>
  )
}

const styles = StyleSheet.create({
headerPhotographer:{
  backgroundColor:"#141414",
  flex:1,
  flexDirection:'column',
  padding:10
},
textPhotographer:{
  color:"white",
  paddingLeft:8,
  fontWeight:"bold",
  fontSize:18
}
})

export default ImageScreen