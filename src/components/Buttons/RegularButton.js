import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";

import { colors } from "../../config/colors";
import RegularText from "../Texts/RegularText";

const { primary } = colors;

const RegularButton = (props) => {
  return (
  
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
      {...props}
    >
      <RegularText style={[{ color: colors.primary }, { ...props?.textStyle }]}>
        {props.children}
      </RegularText>
    </TouchableOpacity>
    
  );
};

export default RegularButton;

const styles = StyleSheet.create({
  container: {
    padding: 15,

    backgroundColor: colors.secondary,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 60,
  },
});
