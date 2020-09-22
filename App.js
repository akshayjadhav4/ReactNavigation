import React from "react";
import Feed from "./src/components/Feed/Feed";
import Details from "./src/components/Details/Details";

import DrawerOne from "./src/components/Drawer/DrawerOne";

import TabOne from "./src/components/Tabs/TabOne";
import TabTwo from "./src/components/Tabs/TabTwo";
import TabThree from "./src/components/Tabs/TabThree";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {
  AppearanceProvider,
  Appearance,
  useColorScheme,
} from "react-native-appearance";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default function App() {
  const colorScheme = useColorScheme();

  const MyTheme = {
    dark: false,
    colors: {
      primary: "rgb(255, 45, 85)",
      background: "rgb(242, 242, 242)",
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  };

  // stack Navigator
  const createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen
        name="Top Tabs"
        children={createTopTabs}
        options={{ title: "Top Tabs" }}
      />
      <Stack.Screen
        name="Bottom Tabs"
        children={createBottomTabs}
        options={{ title: "Bottom Tabs" }}
      />
    </Stack.Navigator>
  );

  // Top tabs
  const createTopTabs = (props) => {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
          name="Tab 1"
          component={TabOne}
          options={{ title: props.route.params.text }}
        />
        <MaterialTopTabs.Screen
          name="Tab 2"
          component={TabTwo}
          options={{ title: "Tab Two" }}
        />
        <MaterialTopTabs.Screen
          name="Tab 3"
          component={TabThree}
          options={{ title: "Tab Three" }}
        />
      </MaterialTopTabs.Navigator>
    );
  };

  // Bottom tabs
  const createBottomTabs = () => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Tab 1" component={TabOne} />
        <MaterialBottomTabs.Screen name="Tab 2" component={TabTwo} />
        <MaterialBottomTabs.Screen name="Tab 3" component={TabThree} />
      </MaterialBottomTabs.Navigator>
    );
  };

  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorScheme === "dark" ? DarkTheme : MyTheme}>
        {/* Drawer navigator */}
        <Drawer.Navigator>
          {/* Using stack navigator as children for Home */}
          <Drawer.Screen name="Home" children={createHomeStack} />
          <Drawer.Screen name="Drawer Two" component={DrawerOne} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
