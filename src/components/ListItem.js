import {
  StyleSheet,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import RegularText from "../components/Texts/RegularText";

import { colors } from "../config/colors";
import { AntDesign } from "@expo/vector-icons";
import { ScreenWidth } from "../config/shared";
const ListItem = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate("testDetails", { testId: data.id, datum: data });
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: ScreenWidth * 0.9,
        }}
      >
        <View>
          <RegularText style={styles.title}>{data.name} </RegularText>
          <RegularText style={styles.title}>{data.age} </RegularText>
        </View>

        <View>
          <RegularText style={styles.title}>{data.location}</RegularText>
          <RegularText style={styles.title}>{data.sex}</RegularText>
        </View>
      </View>
    </Pressable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.lightGrey,
    //#282828
    // borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    // elevation: 5,
    // height: 40,
  },
  text: {
    marginRight: 5,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 3,
    marginHorizontal: 5,
  },
});
