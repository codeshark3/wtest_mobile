import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../config/colors";

import { useNavigation } from "@react-navigation/native";
const HeaderComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("notification")}>
        <MaterialCommunityIcons
          name="bell-ring-outline"
          size={30}
          color={colors.white}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          source={require("../assets/images/profile.png")}
          style={{ width: 40, height: 40 }}
          imageStyle={{ borderRadius: 25 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "transparent",
    //  marginHorizontal: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    // borderBottomColor: colors.accent,
    // borderBottomWidth: 5,
  },
});
