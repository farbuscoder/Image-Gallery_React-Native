import React,{useState, useEffect} from 'react'

//React Native
import { View, Text, StyleSheet } from 'react-native';

//React native Elements
import { Input, Button } from 'react-native-elements';

import { getImages } from '../api/pexels';

//Components
import ImageList from "./../components/ImageList"

const HomeScreen = ({openSearch}) => {
    const [photos, setPhotos]=useState()
    const [searchTerm, setSearchTerm] = useState();

    console.log("home executed")

    const loadImages=async (searchTerm)=>{
        const res = await getImages(searchTerm)
        console.log(res.data)
        setPhotos(res.data.photos)
    }

    useEffect(()=>{
        loadImages()
    },[])


    const handleSearch=async()=>{
await loadImages(searchTerm)
    }

  return (
    <>
    {openSearch&& <View style={styles.searchSection} >
    <Input leftIcon={{type:"feather",name:"search",color:"white"}} 
    leftIconContainerStyle={styles.searchLeftIcon}
    inputContainerStyle={styles.searchInput}
    style={styles.input}
     placeholder='Search a term'
     onChangeText={(value)=>setSearchTerm(value)}
     />
     <Button buttonStyle={styles.buttonSearch} onPress={handleSearch}  title={"Search"}/>
     </View>
     }
    <View style={styles.container}>
        <Text style={styles.totalResultsText} >1000 Results</Text>
      <ImageList photos={photos}/>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#141414",
        alignItems:"center",
        justifyContent:"center"
    },
    totalResultsText:{
        color:"#F3F5F6",
        textAlign:"right",
        width:"100%",
        paddingTop:35,
        paddingRight:5
    },
    searchSection:{
        backgroundColor:"#141414",
        width:"100%",
        paddingLeft:10,
        paddingRight:80,
        flexDirection:"row",
        flex:1/5,
        alignItems:"center"
    },
    searchInput:{
        backgroundColor:"#2c292c",
        borderBottomWidth:0,
        paddingHorizontal:4,
        color:"white"
    },
    searchLeftIcon:{
        paddingStart:10,
        marginRight:7
    },
    input:{
        color:"white"
    },
    buttonSearch:{
        backgroundColor:"#229783",
        marginBottom:27
    }
    
})

export default HomeScreen