import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { colors } from "../config/colors";

import { useNetInfo } from "@react-native-community/netinfo";
import RegularText from "./Texts/RegularText";
function OfflineNotice(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <RegularText style={styles.text}>No Internet Connection</RegularText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: colors.primary,
    // height: 50,
    // top: Constants.statusBarHeight,
    // // paddingTop: 5,

    // position: "absolute",
    // zIndex: 1,
    // width: "100%",

    alignItems: "center",
    backgroundColor: colors.secondary,
    height: 30,
    justifyContent: "center",
    position: "absolute",
    // top: Constants.statusBarHeight,
    width: "100%",
    zIndex: 1,
    marginBottom: 30,
  },

  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
