import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { ScreenHeight } from '../../config/shared'
import {colors} from '../../config/colors'

import {MaterialCommunityIcons} from '@expo/vector-icons'

 const{secondary,accent} = colors


const IconHeader = ({name,size,color,...props}) => {
  return (
    <View style={[{  backgroundColor: secondary,
      paddingTop:25, //fix centering and remove padding
      width:ScreenHeight * 0.15,
      height:ScreenHeight *0.15,
      borderRadius: ScreenHeight * 0.2,
      justifycontent:"center",
      alignItems:"center",
      alignSelf:"center"},{...props.style}]}><MaterialCommunityIcons name={name} size= {ScreenHeight * 0.08}
   color = {color ? color:accent}
   /></View>
  )
}

export default IconHeader

const styles = StyleSheet.create({})