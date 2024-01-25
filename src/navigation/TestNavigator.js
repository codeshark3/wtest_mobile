import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import TestDetailsScreen from "../screens/Tests/TestDetailsScreen";
import TestsScreen from "../screens/Tests/TestsScreen";
const Stack = createNativeStackNavigator();

const TestNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Tests"
      component={TestsScreen}
      options={{
        headerShown: false,
        // tabBarIcon: ({ size, color, focused }) => (
        //   <Ionicons
        //     name="home-outline"
        //     size={focused ? 35 : size}
        //     color={color}
        //   />
        // ),
      }}
    />

    <Stack.Screen
      name="testDetails"
      component={TestDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default TestNavigator;
