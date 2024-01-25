import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import RegularText from "./Texts/RegularText";
// import Screen from "./Screen";
import { colors } from "../config/colors";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const CustomDrawer = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: colors.primary,
          color: colors.secondary,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/profile.png")}
              style={{
                height: 40,
                width: 40,
                borderRadius: 40,
                marginBottom: 10,
                marginLeft: 10,
                marginRight: 5,
              }}
            />
            <View style={{}}>
              <RegularText
                style={{ color: colors.white, fontSize: 20, marginBottom: 5 }}
              >
                Account Name
              </RegularText>
              <View style={{ flexDirection: "row" }}>
                <RegularText style={{ color: colors.white }}>
                  My Coins
                </RegularText>
                <FontAwesome5
                  name="coins"
                  color={colors.white}
                  size={14}
                  style={{ marginTop: 4 }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: 20,
            }}
          >
            <Ionicons
              name="ios-close"
              size={40}
              color={colors.white}
              onPress={() => {}}
            />
          </View>
        </View>

        {/* </ImageBackground> */}

        <View
          style={{ flex: 1, backgroundColor: colors.primary, paddingTop: 10 }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          backgroundColor: colors.primary,
          padding: 20,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        }}
      >
        <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => {}}>
          <View
            style={{
              backgroundColor: colors.primary,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons name="share-social-outline" size={22} />
            <RegularText style={{ fontSize: 15, marginLeft: 5 }}>
              Tell A Friend
            </RegularText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ paddingVertical: 15 }}
          onPress={() => {
            navigation.closeDrawer();
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="exit-outline" size={22} />
            <RegularText style={{ fontSize: 15, marginLeft: 5 }}>
              SignOut
            </RegularText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
