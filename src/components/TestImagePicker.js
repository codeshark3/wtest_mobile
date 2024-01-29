import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useFormikContext } from "formik";

import ImageInput from './inputs/ImageInput';
import { MaterialCommunityIcons } from '@expo/vector-icons'
const TestImagePicker = ({name}) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUri = values[name]
    const handleAdd = (uri) => {
        setFieldValue(name, [ uri]);
        console.log(imageUri)
      };
    
      const handleRemove = (uri) => {
        setFieldValue(
          name,
          imageUri.filter((imageUri) => imageUri !== uri)
        );
      };

      
  const onCameraButtonPress = async () => {
    setModalVisible(!isModalVisible);

  }
 
  return (
  <>
  <ImageInput onChangeImage={(uri) => handleAdd(uri)} />
  </>

    // <TouchableOpacity onPress={onCameraButtonPress} >
    // <MaterialCommunityIcons name="camera-outline" size={40} color={colors.secondary} />
//   </TouchableOpacity>
  )
}

export default TestImagePicker

const styles = StyleSheet.create({})