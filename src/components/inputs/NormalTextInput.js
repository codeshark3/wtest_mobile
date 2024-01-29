import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";

const { primary, tertiary, secondary } = colors;

const NormalTextInput = ({ label, ...props }) => {
  const customOnFocus = () => {
    props?.onFocus;
  };

  return (
    <View>
      <SmallText>{label}</SmallText>
      <TextInput
        {...props}
        placeholderTextColor={colors.lightGrey}
        style={{
          backgroundColor: colors.white,
          color: colors.secondary,
          padding: 10,
          paddingLeft: 15,
          paddingRight: 10,
          borderRadius: 10,
          fontSize: 16,
          height: 55,
          marginTop: 3,
          marginBottom: 10,

          borderColor: secondary,
          borderWidth: 2,
        }}
        onFocus={customOnFocus}
      />
    </View>
  );
};

export default NormalTextInput;

const styles = StyleSheet.create({
  text_input: {
    backgroundColor: colors.secondary,
    padding: 5,

    paddingRight: 5,
    borderRadius: 10,
    fontSize: 16,
    height: 60,
    marginTop: 3,
    marginBottom: 10,
    width: 140,
    color: colors.primary,

    borderColor: secondary,
    borderWidth: 2,
  },
});
