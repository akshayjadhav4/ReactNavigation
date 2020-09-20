import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../styles/styles";

export default function Details() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Details Screen</Text>
      <Button onPress={() => {}} title="View Botton Tabs" />
      <Button onPress={() => {}} title="View Top Tabs" />
    </View>
  );
}
