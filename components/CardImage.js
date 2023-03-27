import React from 'react'

//React Native
import { TouchableOpacity, StyleSheet, Image } from 'react-native'

//React Navigation
import { useNavigation } from '@react-navigation/native'

const CardImage = ({image}) => {

    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("ImageScreen",{image})}} style={styles.CardImage}>
      <Image source={{
        uri: image.src.large? image.src.large:"https://i.ibb.co/VSpF1rW/no-image-icon-23485.png"
      }}
      style={{height:180, width:'100%', objectFit:"cover"}}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    CardImage:{
        display:'flex',
        width:"49.5%",
        margin:4,
        justifyContent:"space-between",
        backgroundColor:"#2c292c",
        borderWidth:0,
        borderRadius:5
    }
})


export default CardImage