import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import RegularText from "../../components/Texts/RegularText";
import { ScreenWidth } from "../../config/shared";
import { colors } from "../../config/colors";
import Screen from "../../components/Screen";
import SmallText from "../../components/Texts/SmallText";

const TestDetailsScreen = () => {
  const route = useRoute();

  const {
    params: { testId, datum },
  } = route;
 
  return (
    <Screen>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: ScreenWidth * 0.9,
          }}
        >
          <View>
            <SmallText>Name</SmallText>
            <RegularText style={styles.title}>{datum.name} </RegularText>
            <SmallText>Age</SmallText>
            <RegularText style={styles.title}>{datum.age} </RegularText>
          </View>

          <View>
            <SmallText>Location</SmallText>
            <RegularText style={styles.title}>{datum.location}</RegularText>
            <SmallText>Gender</SmallText>
            <RegularText style={styles.title}>{datum.sex}</RegularText>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: ScreenWidth * 0.9,
          }}
        >
          <View>
            <RegularText style={styles.title}>Onchocerciasis</RegularText>
          </View>

          <View>
            <RegularText style={styles.title}>{datum.O}</RegularText>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: ScreenWidth * 0.9,
          }}
        >
          <View>
            <RegularText style={styles.title}>Schistomsomiasis</RegularText>
          </View>

          <View>
            <RegularText style={styles.title}>{datum.S}</RegularText>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: ScreenWidth * 0.9,
          }}
        >
          <View>
            <RegularText style={styles.title}>Lymphatic Filariasis</RegularText>
          </View>

          <View>
            <RegularText style={styles.title}>{datum.Lf}</RegularText>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: ScreenWidth * 0.9,
          }}
        >
          <View>
            <RegularText style={styles.title}>Helminths</RegularText>
          </View>

          <View>
            <RegularText style={styles.title}>{datum.H}</RegularText>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default TestDetailsScreen;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.tertiary,
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
  title: {
    fontWeight: "bold",
    marginBottom: 3,
    marginHorizontal: 5,
  },
});
