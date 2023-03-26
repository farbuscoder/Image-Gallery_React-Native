import React from 'react'

//React Native
import { View, Text, Image } from 'react-native'

const ImageScreen = ({route}) => {

  const {image} = route.params;

  return (
    <View>
      <Image source={{uri:image.src.large, height:350}} />
    </View>
  )
}

export default ImageScreen