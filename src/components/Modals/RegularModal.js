import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import RegularText from "../Texts/RegularText";
const RegularModal = ({ toggle, close, message, color, icon }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={toggle}
      onRequestClose={close}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, styles.modal2]}>
          <Ionicons name={icon} size={70} color={color} />
          <RegularText
            style={{
              color: color,
              fontWeight: "bold",
              fontSize: 20,
              marginVertical: 10,
            }}
          >
            {message}
          </RegularText>
          <Pressable
            style={{
              width: 100,
              height: 50,
              backgroundColor: color,
              justifyContent: "center",
              alignItems: "center",
              elevation: 5,
              borderRadius: 5,
            }}
            onPress={close}
          >
            <RegularText>Done</RegularText>
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
