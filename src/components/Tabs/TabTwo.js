import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../styles/styles";
import { useIsFocused } from "@react-navigation/native";

export default function TabTwo() {
  const isFocused = useIsFocused();
  console.log("isFocused >>>>>>>>>>", isFocused);
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Tab Two</Text>
    </View>
  );
}
