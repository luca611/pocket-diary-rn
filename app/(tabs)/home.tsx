import { auth } from "@/config/firebase";
import { router } from "expo-router";
import { signOut } from "firebase/auth";
import { Text, View, StyleSheet } from "react-native";
import { GestureHandlerRootView, NativeViewGestureHandler, TouchableOpacity } from "react-native-gesture-handler";

const HandleLogOut = async () => {
  await signOut(auth);
  router.replace('/');
}
export default function Home() {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Text>This is the Home page.</Text>
        <TouchableOpacity onPress={HandleLogOut}>
          <Text>log Out</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});