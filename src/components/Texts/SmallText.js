import { StyleSheet, Text } from "react-native";
import React from "react";

import { colors } from "../../config/colors";
const SmallText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default SmallText;

const styles = StyleSheet.create({
  text: { fontSize: 13, textAlign: "left", color: colors.secondary },
});
