import { StyleSheet, Text, View } from "react-native";
import React from "react";



const RowContainer = ({children, style}) => {
  return <View style={[styles.view, style]}>{children}</View>;
};

export default RowContainer;

const styles = StyleSheet.create({
  view:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
});
