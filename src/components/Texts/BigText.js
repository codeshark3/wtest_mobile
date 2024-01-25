import { StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../../config/colors";

const BigText = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default BigText;

const styles = StyleSheet.create({
  text: {

    fontSize: 30,
    color: colors.white,
    textAlign: "left",
  },
});
