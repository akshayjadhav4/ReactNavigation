import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "../../styles/styles";

export default function Feed({navigation}) {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Navigation</Text>
      <Button onPress={() => navigation.navigate('Details')} title="Go To Feed" />
    </View>
  );
}
