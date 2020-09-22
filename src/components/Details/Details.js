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

  useFocusEffect(
    React.useCallback(() => {
      fetch("https://restcountries.eu/rest/v2/currency/cop")
        .then((response) => {
          response.json().then((data) => console.log(data));
        })
        .catch((error) => console.log(error));
      return () => console.log("LOST FOCUS");
    })
  );

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
