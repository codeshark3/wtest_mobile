import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../config/colors";
import LoginScreen from "../screens/Auth/LoginScreen";
//import DrawerNavigator from "./DrawerNavigator";
import AppNavigator from "./AppNavigator";
// import TestEditScreen from "../screens/TestEditScreen";

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        presentation: "modal",
        headerTintColor: colors.white,
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="App" component={AppNavigator} />
      {/* <Stack.Screen name="App" component={DrawerNavigator} /> */}
      {/* <Stack.Screen name="Tests Entry" component={TestEditScreen} /> */}
    </Stack.Navigator>
  );
}

export default AuthNavigator;
