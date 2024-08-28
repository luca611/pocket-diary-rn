import { router } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { NativeViewGestureHandler, TouchableOpacity } from "react-native-gesture-handler";

export default function Home() {
  return (
      <View style={styles.container}>
        <Text>This is the Home page.</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});