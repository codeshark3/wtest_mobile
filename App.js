import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { Provider } from "react-redux";
import { init } from "./src/utility/db";
import { store } from "./src/store/store";
import OfflineNotice from "./src/components/OfflineNotice";
export default function App() {
  init()
    .then(() => {
      console.log("database initialized");
    })
    .catch((err) => {
      console.log("initializing failed");
      console.log(err);
    });
  return (
    <Provider store={store}>
      <OfflineNotice />
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
