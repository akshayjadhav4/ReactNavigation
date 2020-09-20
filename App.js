import React from "react";
import Feed from "./src/components/Feed/Feed";
import Details from "./src/components/Details/Details";

import DrawerOne from "./src/components/Drawer/DrawerOne";

import TabOne from "./src/components/Tabs/TabOne";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default function App() {
  // stack Navigator
  const createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      {/* Drawer navigator */}
      <Drawer.Navigator>
        {/* Using stack navigator as children for Home */}
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Drawer Two" component={DrawerOne} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
