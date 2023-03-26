import React,{useState, useEffect} from 'react'

//React Native
import { View, Text, StyleSheet } from 'react-native';

import { getImages } from '../api/pexels';

//Components
import ImageList from "./../components/ImageList"

const HomeScreen = () => {
    const [photos, setPhotos]=useState()

    console.log("home executed")

    const loadImages=async ()=>{
        const res = await getImages()
        console.log(res.data)
        setPhotos(res.data.photos)
    }

    useEffect(()=>{
        loadImages()
    },[])

  return (
    <View>
      <ImageList photos={photos}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    
    }
})

export default HomeScreen