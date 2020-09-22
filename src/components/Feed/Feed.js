import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../styles/styles";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Feed() {
  const navigation = useNavigation();
  const route = useRoute();

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
