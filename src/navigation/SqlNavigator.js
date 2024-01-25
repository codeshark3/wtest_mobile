import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import colors from "../config/colors";
import OfflineScreen from "../screens/offline/OfflineScreen";
import OfflineDetailScreen from "../screens/offline/OfflineDetailScreen";

const Stack = createNativeStackNavigator();

const SqlNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.primary },
      presentation: "modal",
      headerTintColor: colors.white,
    }}
  >
    <Stack.Screen
      name="Offline"
      component={OfflineScreen}
      options={{ headerTitle: "Offline Data" }}
    />

    <Stack.Screen
      name="Offlinedetails"
      component={OfflineDetailScreen}
      options={{
        headerTitle: "Details",
      }}
    />
  </Stack.Navigator>
);

export default SqlNavigator;
