import React from "react";
import { StyleSheet, Text } from "react-native";

import { colors } from "../../config/colors";

const { tertiary } = colors;

const RegularText = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default RegularText;

const styles = StyleSheet.create({
  text: {

    fontSize: 15,
    color: colors.secondary,
    textAlign: "left",
  },
});
