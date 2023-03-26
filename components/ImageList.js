import React from 'react'

//React native
import { View, Text, FlatList } from 'react-native'

//Components
import CardImage from './CardImage'
const ImageList = ({photos}) => {

    const renderItem = ({item})=><CardImage  image={item} />


  return (
    <View>
      <FlatList data={photos} renderItem={renderItem} keyExtractor={(item)=>item.id} numColumns={2} />
    </View>
  )
}

export default ImageList