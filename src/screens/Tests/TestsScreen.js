import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import Screen from "../../components/Screen";
import RegularText from "../../components/Texts/RegularText";
import ListItem from "../../components/ListItem";
import { useDispatch, useSelector } from "react-redux";

import { fetchTests } from "../../store/features/tests/testSlice";
const TestsScreen = () => {
  const dispatch = useDispatch();
  const tests = useSelector((store) => store.test.tests);

  useEffect(() => {
    dispatch(fetchTests());
  }, []);

  return (
    <Screen>
      <FlatList
        style={{ marginVertical: 10 }}
        initialNumToRender={50}
        data={tests}
        // keyExtractor={(test) => test._id.toString()}
        renderItem={({ item }) => <ListItem data={item} />}

        // refreshing={refreshing}
        // onRefresh={() => {
        //   getTestsApi.request();
        // }}
      />
    </Screen>
  );
};

export default TestsScreen;

const styles = StyleSheet.create({});
