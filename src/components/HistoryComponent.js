import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { colors } from "../config/colors";
import { ScreenWidth } from "../config/shared";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import RegularText from "./Texts/RegularText";
import SmallText from "./Texts/SmallText";
import { useNavigation } from "@react-navigation/native";
const HistoryComponent = ({ image, title, value, link }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(link)}>
      <View
        style={{
          width: "100%",
          height: 60,
          borderWidth: 1,
          borderColor: colors.lightGrey,
          borderRadius: 30,
          backgroundColor: "rgba(107,114,128,0.4)",

          justifyContent: "center",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              flexDirection: "row",

              marginLeft: 20,
              width: ScreenWidth * 0.4,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            {/* <MaterialCommunityIcons
              name={icon}
              size={30}
              color={colors.white}
            /> */}
            <Image source={image} style={{ width: 30, height: 30 }} />
            <RegularText>{title}</RegularText>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              width: ScreenWidth * 0.4,
              marginRight: 15,
            }}
          >
            <View style={{ paddingRight: 10 }}>
              <RegularText>{value}</RegularText>
            </View>
            <View style={styles.right_icon}>
              <Ionicons
                name="chevron-forward-sharp"
                size={30}
                color={colors.white}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HistoryComponent;

const styles = StyleSheet.create({
  right_icon: {
    //  position: "absolute",
    //top: 35,
    //right: 15,
    zIndex: 1,
    borderLeftWidth: 1,
    borderColor: colors.white,
    // paddingLeft: 10,
  },
});
