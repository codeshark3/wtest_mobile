import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '../../config/colors'
import SmallText from '../Texts/SmallText'
import * as ImagePicker from "expo-image-picker"
const ImageInput = () => {
  const uploadImage = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync()
      let result = await ImagePicker.launchCameraAsync({
        cameraType:ImagePicker.CameraType.back,
        allowsEditing:true,
        aspect:[1,1],
        quality:1
      })

      if(!result.canceled){
        //save image

      }
    } catch (error) {
      
    }
  }
  return (
    <Pressable onPress={()=> {uploadImage()}} style={{marginHorizontal:10}}>
            <MaterialCommunityIcons name="camera-outline" size = {35} color={colors.secondary}/>
          <SmallText>Camera</SmallText>
          </Pressable>
  )
}

export default ImageInput

const styles = StyleSheet.create({})