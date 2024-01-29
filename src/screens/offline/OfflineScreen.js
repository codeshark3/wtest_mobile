import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

import { fetchTests, deleteTest } from "../../utility/db";
import ListItem from "../../components/ListItem";
// import ActivityIndicator from "../components/ActivityIndicator";
import ListItemSeparator from "../../components/ListItemSeparator";
////import testsApi from "../api/tests";
//import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../../config/colors";

import OfflineNotice from "../../components/OfflineNotice";
import RegularText from "../../components/Texts/RegularText";
import RegularButton from "../../components/Buttons/RegularButton";
const OfflineScreen = () => {
  const [tests, setTests] = useState([]);

  const [refreshing, setRefreshing] = useState(false);
  const [uplength, setUplength] = useState(0);

  const loadTests = async () => {
    try {
      const dbResult = await fetchTests();
      let len = dbResult.rows.length;
      setUplength(len);

      if (len > 0) {
        let results = [];
        for (let i = 0; i < len; i++) {
          let item = dbResult.rows.item(i);
          results.push({
            ID: item.ID,
            name: item.name,
            sex: item.sex,
            age: item.age,
            location: item.location,
            onchoImage: item.onchoImage,
            schistoImage: item.schistoImage,
            lfImage: item.lfImage,
            helminthsImage: item.helminthsImage,
          });
        }

        setTests(results);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleSqlSubmit = async () => {
    // setProgress(0);
    // setUploadVisible(true);
    if (netInfo.type !== "unknown" && netInfo.isInternetReachable === true) {
      try {
        let result = [];
        {
          tests.map((test) =>
            (result = testsApi.addSqlTest({ ...test }))
              .then(deleteTest())
              .then(setTests([]))

              .then(loadTests())
          );
        }
        for (let i = 0; i < uplength; i++) {
          // setUploadVisible(false);
          if (result != []) {
            return alert("Submitted to server");
          }

          // if (!result.ok) {
          //   // setUploadVisible(false);
          //   return alert("could not save test");
          // }
        }
      } catch (err) {
        console.log(err);
      }
    } else if (
      netInfo.type !== "unknown" &&
      netInfo.isInternetReachable === false
    ) {
      alert("No Internet Connection! Please Retry!");
    }
  };
  useEffect(() => {
    loadTests();
  }, []);

  return (
    <Screen>
      {/* <OfflineNotice /> */}
      <RegularText>Number of entries:{uplength}</RegularText>
      <RegularButton
        onPress={() => {
          handleSqlSubmit();
        }}
      >
        Upload
      </RegularButton>
      {uplength >= 1 ? (
        <FlatList
          style={{
            marginBottom: 10,
          }}
          initialNumToRender={10}
          data={tests}
          keyExtractor={(test) => test.ID.toString()}
          renderItem={({ item }) => <ListItem data={item} />}
          extraData={tests}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={() => {
            loadTests();
          }}
        />
      ) : (
        <RegularText>No data</RegularText>
      )}
    </Screen>
  );
};

export default OfflineScreen;

const styles = StyleSheet.create({
  // container: {
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  fab: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 10,
    bottom: 30,
  },
});
