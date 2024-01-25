import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BackgroundContainer from "./BackgroundContainer";
import { colors } from "../config/colors";
import { ScreenHeight } from "../config/shared";
import SmallText from "../components/Texts/SmallText";
import { Formik } from "formik";
const ScreenContainer = ({ title, info }) => {
  return (
    <View>
      <BackgroundContainer />
      <View>
        <View style={styles.headerContainer}>
          <SmallText>{title}</SmallText>
        </View>
        <View style={styles.main}>{info}</View>
      </View>
    </View>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  main: {
    //justifyContent: "center",
    // alignItems: "center",
    height: ScreenHeight * 0.7,
    backgroundColor: colors.primary,
    borderRadius: 30,
    top: ScreenHeight * 0.05,
  },
  headerContainer: {
    backgroundColor: "transparent",
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    top: 30,
    // borderBottomColor: colors.accent,
    // borderBottomWidth: 5,
  },
});
