import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../styles/styles";

export default function Details({ navigation }) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Details Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate("Top Tabs")}
          title="View Top Tabs"
        />
        <Button
          onPress={() => navigation.navigate("Bottom Tabs")}
          title="View Bottom Tabs"
        />
      </View>
    </View>
  );
}
