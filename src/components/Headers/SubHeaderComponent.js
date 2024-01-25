import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../config/colors";
import SmallText from "../Texts/SmallText";
const SubHeaderComponent = ({ screenName }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name="chevron-back-sharp"
        size={30}
        onPress={() => navigation.goBack()}
        color={colors.white}
      />
      <SmallText>{screenName}</SmallText>
    </View>
  );
};

export default SubHeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "transparent",
    margin: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    //   top: 30,
    // borderBottomColor: colors.accent,
    // borderBottomWidth: 5,
  },
});
