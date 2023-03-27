import React,{useState, useEffect} from 'react'

//React Native
import { View, Text, Image, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'

//React native elements
import { Avatar, Button } from 'react-native-elements';

//Expo
import * as WebBrowser from "expo-web-browser";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

//Components
import ImageList from '../components/ImageList';


import { getImages } from '../api/pexels';

const ImageScreen = ({route}) => {
  const {image} = route.params;
  const [photos, setPhotos]=useState()

  const loadImages=async ()=>{
      const res = await getImages()
      setPhotos(res.data.photos)
  }

  useEffect(()=>{
      loadImages()
  },[])

  const handleDownload=()=>{
         downLoadFile();
  }

  const downLoadFile =async ()=>{

    try {
      let fileuri =FileSystem.documentDirectory + image.id+'.jpg'
      const {uri}=await FileSystem.downloadAsync(image.src.landscape, fileuri);
  
      saveFile(uri)
    } catch (error) {
      console.log(error)
    }

   
  }

  const saveFile =async (fileUri)=>{
      const {status}=await MediaLibrary.requestPermissionsAsync()

      if (status === 'granted'){
        const asset = await MediaLibrary.createAssetAsync(fileUri)
        await MediaLibrary.createAlbumAsync('Downloads', asset, false)
        ToastAndroid.show('The image has been downloaded!', ToastAndroid.SHORT);
      }
  }

  const handlePress =async ()=>{
    await WebBrowser.openBrowserAsync(image.photographer_url)
  }

  return (
    <View style={styles.headerPhotographer} >
      <Image source={{uri:image.src.landscape, height:350}} />
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
    <Button onPress={handleDownload} title={"Download"} buttonStyle={{backgroundColor:"#229783"}} />
   </View>
   <ImageList photos={photos} />
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