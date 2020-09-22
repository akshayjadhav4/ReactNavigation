import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../styles/styles";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

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
        <Button
          onPress={() => navigation.navigate("Feed", { data: "Back to you" })}
          title="Go Back With Data"
        />
      </View>
    </View>
  );
}
