import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RegularText from "../components/Texts/RegularText";
// import ChartsScreen from "../screens/ChartsScreen";
import StatsScreen from "../screens/StatsScreen";
 import TestEditScreen from "../screens/Tests/TestEditScreen";
import TestNavigator from "./TestNavigator";
// import NewTestButton from "./NewTestButton";
import { colors } from "../config/colors";
import SmallText from "../components/Texts/SmallText";
import OfflineScreen from "../screens/offline/OfflineScreen"
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.white,
        borderRadius: 15,
        height: 60,
        elevation: 0,
        ...styles.shadow,
      },
    }}
  >
    <Tab.Screen
      name="Test"
      component={TestNavigator}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View style={styles.bottomTab}>
            <MaterialCommunityIcons
              name="test-tube"
              color={color}
              size={24}
              style={{ color: focused ? colors.secondary : '#808080' }}
            />
            <SmallText
              style={{
                color: focused ? colors.secondary : '#808080' ,
             
              }}
            >
              TESTS
            </SmallText>
          </View>
        ),
      }}
    />
   <Tab.Screen
      name="TestEdit"
      component={TestEditScreen}
      options={({ navigation, color, focused }) => ({
        tabBarIcon: ({ color, size, focused }) => (
          <View style={{
            top:Platform.OS == "ios"? -10:-20,
           width:Platform.OS == "ios"? 50:60,
            height:Platform.OS == "ios"? 50:60,
            borderRadius:Platform.OS == "ios"? 25:30,
           alignItems:"center",
              justifyContent:"center",
              backgroundColor: colors.secondary
          }}>
            <MaterialCommunityIcons
              name="plus"
              color={colors.white}
              size={40}
             // style={{ color: focused ? colors.secondary : '#808080' }}
            />
           
          </View>
        ),
    
      })}
    /> 
    <Tab.Screen
      name="Offline"
      component={OfflineScreen}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View style={styles.bottomTab}>
            <MaterialCommunityIcons
              name="access-point-network-off"
              color={color}
              size={24}
              style={{ color: focused ? colors.secondary : '#808080' }}
            />
            <SmallText
              style={{
                color: focused ? colors.secondary : '#808080' ,
             
              }}
            >
            OFFLINE
            </SmallText>
          </View>
        ),
      }}
     
        // headerShown: true,
        // headerStyle: { backgroundColor: colors.primary },
        // headerTintColor: colors.white,

    />
    <Tab.Screen
      name="Statistics"
      component={StatsScreen}
      options={{
        tabBarIcon: ({ color, size, focused }) => (
          <View style={styles.bottomTab}>
            <MaterialCommunityIcons
              name="finance"
              color={color}
              size={24}
              style={{ color: focused ? colors.secondary : '#808080' }}
            />
            <SmallText
              style={{
                color: focused ? colors.secondary : '#808080' ,
             
              }}
            >
             STATISTICS
            </SmallText>
          </View>
        ),
      }}  
     
    />
  </Tab.Navigator>
);
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  bottomTab: {
    alignItems: "center",
    justifyContent: "center",
    // top: 1,
  },
});

export default AppNavigator;

{
  /* <Tab.Screen
name="TestEdit"
component={TestEditScreen}
options={({ navigation }) => ({
  tabBarButton: () => (
    <NewTestButton onPress={() => navigation.navigate("TestEdit")} />
  ),
  tabBarIcon: ({ color, size }) => (
    <MaterialCommunityIcons
      name="plus-circle"
      color={color}
      size={size}
    />
  ),
})}
/> */
}
