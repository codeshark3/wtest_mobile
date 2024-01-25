import { StyleSheet, Image, View } from "react-native";
import React from "react";
import { ScreenHeight } from "../../config/shared";
import { colors } from "../../config/colors";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const { secondary, accent } = colors;

const Icon = ({ name, size, color, ...props }) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.primary,
          width: ScreenHeight * 0.17,
          height: ScreenHeight * 0.17,
          borderRadius: ScreenHeight * 0.2,
          justifycontent: "center",
          alignItems: "center",
          alignSelf: "center",
        },
        { ...props.style },
      ]}
    >
      <Image
        resizeMode="contain"
        source={require("../../assets/images/logo.png")}
        style={{ justifyContent: "center" }}
        color={color ? color : accent}
      />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.primary,
    width: ScreenHeight * 0.17,
    height: ScreenHeight * 0.17,
    borderRadius: ScreenHeight * 0.2,
    justifycontent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
});
