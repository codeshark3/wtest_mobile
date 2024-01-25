import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { colors } from "../../config/colors";
import SmallText from "../Texts/SmallText";

const PressableText = (props) => {
  return (
    <Pressable style={styles.pressable} onPress={props.onPress} {...props}>
      <SmallText style={[{ color: colors.white }, { ...props?.textStyle }]}>
        {props.children}
      </SmallText>
    </Pressable>
  );
};

export default PressableText;

const styles = StyleSheet.create({
  pressable: {
    paddingVertical: 5,
    alignSelf: "center",
  },
});
