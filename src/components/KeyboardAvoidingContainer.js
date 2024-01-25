import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
// import { StatusBarHeight } from '../shared'
import { colors } from "../config/colors";
import Constants from "expo-constants";

const { primary } = colors;

const KeyboardAvoidingContainer = (props) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "transparent" }}
      behaviour={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={60}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable onPress={Keyboard.dismiss}>{props.children}</Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingContainer;

const styles = StyleSheet.create({
  padding: 25,
  paddingTop: Constants.statusBarHeight + 30,
  backgroundColor: primary,
});
