import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../styles/styles";

export default function Details({ route, navigation }) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>{route.params.screenTitle}</Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => navigation.navigate("Top Tabs", { text: "Tab One" })}
          title="View Top Tabs"
        />
        <Button
          onPress={() =>
            navigation.navigate("Bottom Tabs", { text: "Tab One" })
          }
          title="View Bottom Tabs"
        />
      </View>
    </View>
  );
}
