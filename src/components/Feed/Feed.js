import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../styles/styles";

export default function Feed({ route, navigation }) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Navigation</Text>
      {route.params?.data && (
        <Text style={styles.title}>{route.params?.data}</Text>
      )}
      {/* onPress moving to Details screen  */}
      <Button
        onPress={() =>
          navigation.navigate("Details", { screenTitle: "My Details Screen" })
        }
        title="Go To Feed"
      />
    </View>
  );
}
