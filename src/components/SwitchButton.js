import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import RegularButton from "./Buttons/RegularButton";
import RegularText from "./Texts/RegularText";
import Screen from "./Screen";
import { colors } from "../config/colors";

const SwitchButton = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Screen>
      <View style={styles.container}>
        <View
          style={{
            width: "90%",
            height: 60,
            borderWidth: 0.5,
            borderRadius: 45,
            flexDirection: "row",
            alignSelf: "center",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <TouchableOpacity
            style={{
              width: "50%",
              height: 50,
              backgroundColor: selected == 0 ? colors.accent : colors.primary,
              borderRadius: 45,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelected(0);
            }}
          >
            <RegularText>eiewmfefewm</RegularText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: "50%",
              height: 50,
              backgroundColor: selected == 1 ? colors.accent : colors.primary,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              setSelected(1);
            }}
          >
            <RegularText>cadlvvd,</RegularText>
          </TouchableOpacity>
        </View>
        {selected == 0 ? (
          <View>
            <RegularText>wkiqwnieniafme</RegularText>
          </View>
        ) : (
          <View>
            <RegularText>wnnvindivndidsnvlniafme</RegularText>
          </View>
        )}
      </View>
    </Screen>
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
