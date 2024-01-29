import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import RegularText from "../Texts/RegularText";
import { colors } from "../../config/colors";
import SmallText from "../Texts/SmallText";
import * as ImagePicker from "expo-image-picker"
const RegularModal = ({ toggle, close, message, color, icon }) => {
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
    <Modal
      animationType="slide"
      transparent={true}
      visible={toggle}
      onRequestClose={close}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, styles.modal2]}>
        
        <View style={{flexDirection:"row",justifyContent:"center", alignItems:"center"}}>
          <Pressable onPress={()=> {uploadImage()}} style={{marginHorizontal:10}}>
            <MaterialCommunityIcons name="camera-outline" size = {35} color={colors.secondary}/>
          <SmallText>Camera</SmallText>
          </Pressable>
          <Pressable onPress={()=> {}}  style={{marginHorizontal:10}}>
            <MaterialCommunityIcons name="image-outline" size = {35} color={colors.secondary}/>
          <SmallText>Gallery</SmallText>
          </Pressable>
          <Pressable onPress={()=> {}}  style={{marginHorizontal:10}}>
            <MaterialCommunityIcons name="trash-can-outline" size = {35} color={colors.secondary}/>
          <SmallText>Delete</SmallText>
          </Pressable>
        </View>
          <Pressable
            style={{
              width: 50,
              height: 50,
              backgroundColor: colors.accent,
              justifyContent: "center",
              alignItems: "center",
              elevation: 5,
              borderRadius: 5,
              marginTop:20
            }}
            onPress={close}
          >
            <RegularText>Cancel</RegularText>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default RegularModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: 200,
    width: 250,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modal2: {
    justifyContent: "center",
    alignItems: "center",
  },
});
