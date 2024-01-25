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

const StyledTextInput = ({ icon, label, isPassword, ...props }) => {
  const [inputBackgroundColor, setInputBackgroundColor] = useState(
    colors.secondary
  );

  const [hidePassword, setHidePassword] = useState(true);
  const customOnBlur = () => {
    props?.onBlur;
    setInputBackgroundColor(colors.secondary);
  };

  const customOnFocus = () => {
    props?.onFocus;
    setInputBackgroundColor(colors.secondary);
  };

  return (
    <View>
      <View style={styles.left_icon}>
        <MaterialCommunityIcons name={icon} size={30} color={colors.accent} />
      </View>

      <SmallText>{label}</SmallText>
      <TextInput
        {...props}
        placeholderTextColor={colors.lightGrey}
        style={{
          backgroundColor: colors.white,
          color: colors.secondary,
          padding: 15,
          paddingLeft: 60,
          paddingRight: 10,
          borderRadius: 10,
          fontSize: 16,
          height: 60,
          marginTop: 3,
          marginBottom: 10,

          borderColor: secondary,
          borderWidth: 2,
        }}
        onBlur={customOnBlur}
        onFocus={customOnFocus}
        secureTextEntry={isPassword && hidePassword}
      />

      {isPassword && (
        <TouchableOpacity
          style={styles.right_icon}
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <MaterialCommunityIcons
            name={hidePassword ? "eye-off-outline" : "eye-outline"}
            size={30}
            color={colors.tertiary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default StyledTextInput;

const styles = StyleSheet.create({
  text_input: {
    backgroundColor: colors.secondary,
    padding: 15,

    paddingRight: 10,
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
  right_icon: {
    position: "absolute",
    top: 35,
    right: 15,
    zIndex: 1,

    paddingRight: 10,
  },
  left_icon: {
    position: "absolute",
    top: 35,
    left: 15,
    zIndex: 1,
    borderRightWidth: 2,
    borderColor: colors.secondary,
    paddingRight: 10,
  },
});
